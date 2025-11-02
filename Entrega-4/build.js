// Build script para otimização de produção
const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

class ProductionOptimizer {
    constructor() {
        this.distDir = path.join(__dirname, 'dist');
        this.sourceDir = __dirname;
    }

    async build() {
        console.log('🚀 Iniciando build de produção...');
        
        // Criar diretório dist
        this.createDistDirectory();
        
        // Minificar CSS
        await this.minifyCSS();
        
        // Minificar JavaScript
        await this.minifyJS();
        
        // Otimizar HTML
        await this.optimizeHTML();
        
        // Copiar e otimizar imagens
        await this.optimizeImages();
        
        // Gerar manifesto
        this.generateManifest();
        
        console.log('✅ Build concluído com sucesso!');
        console.log(`📂 Arquivos gerados em: ${this.distDir}`);
    }

    createDistDirectory() {
        if (!fs.existsSync(this.distDir)) {
            fs.mkdirSync(this.distDir, { recursive: true });
        }
        
        // Criar subdiretórios
        ['css', 'js', 'images'].forEach(dir => {
            const dirPath = path.join(this.distDir, dir);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }
        });
    }

    async minifyCSS() {
        console.log('📦 Minificando CSS...');
        
        const CleanCSS = require('clean-css');
        const cleanCSS = new CleanCSS({
            level: 2,
            returnPromise: true,
            sourceMap: true
        });
        
        // Ler CSS principal
        const cssPath = path.join(this.sourceDir, 'css', 'main.css');
        const cssContent = fs.readFileSync(cssPath, 'utf8');
        
        try {
            const result = await cleanCSS.minify(cssContent);
            
            // Salvar CSS minificado
            fs.writeFileSync(
                path.join(this.distDir, 'css', 'main.min.css'),
                result.styles
            );
            
            // Salvar source map
            if (result.sourceMap) {
                fs.writeFileSync(
                    path.join(this.distDir, 'css', 'main.min.css.map'),
                    result.sourceMap.toString()
                );
            }
            
            console.log(`✅ CSS minificado: ${(result.styles.length / 1024).toFixed(2)}KB`);
        } catch (error) {
            console.error('❌ Erro ao minificar CSS:', error);
        }
    }

    async minifyJS() {
        console.log('📦 Minificando JavaScript...');
        
        const jsFiles = ['spa.js', 'templates.js', 'form.js', 'main.js', 'accessibility.js'];
        let combinedJS = '';
        
        // Combinar todos os arquivos JS
        jsFiles.forEach(file => {
            const filePath = path.join(this.sourceDir, 'js', file);
            if (fs.existsSync(filePath)) {
                combinedJS += fs.readFileSync(filePath, 'utf8') + '\n';
            }
        });
        
        try {
            const result = await minify(combinedJS, {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                    pure_funcs: ['console.log', 'console.info']
                },
                mangle: true,
                sourceMap: {
                    filename: 'main.min.js',
                    url: 'main.min.js.map'
                }
            });
            
            // Salvar JS minificado
            fs.writeFileSync(
                path.join(this.distDir, 'js', 'main.min.js'),
                result.code
            );
            
            // Salvar source map
            if (result.map) {
                fs.writeFileSync(
                    path.join(this.distDir, 'js', 'main.min.js.map'),
                    result.map
                );
            }
            
            console.log(`✅ JavaScript minificado: ${(result.code.length / 1024).toFixed(2)}KB`);
        } catch (error) {
            console.error('❌ Erro ao minificar JavaScript:', error);
        }
    }

    async optimizeHTML() {
        console.log('📦 Otimizando HTML...');
        
        const htmlMinifier = require('html-minifier');
        const htmlPath = path.join(this.sourceDir, 'index.html');
        let htmlContent = fs.readFileSync(htmlPath, 'utf8');
        
        // Atualizar referências para arquivos minificados
        htmlContent = htmlContent
            .replace('css/main.css', 'css/main.min.css')
            .replace(/<script src="js\/.*?\.js"><\/script>/g, '')
            .replace('</body>', '<script src="js/main.min.js"></script>\n</body>');
        
        const minifiedHTML = htmlMinifier.minify(htmlContent, {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
        });
        
        fs.writeFileSync(
            path.join(this.distDir, 'index.html'),
            minifiedHTML
        );
        
        console.log(`✅ HTML otimizado: ${(minifiedHTML.length / 1024).toFixed(2)}KB`);
    }

    async optimizeImages() {
        console.log('📦 Otimizando imagens...');
        
        const imagesDir = path.join(this.sourceDir, 'images');
        const distImagesDir = path.join(this.distDir, 'images');
        
        if (fs.existsSync(imagesDir)) {
            const files = fs.readdirSync(imagesDir);
            
            files.forEach(file => {
                const sourcePath = path.join(imagesDir, file);
                const destPath = path.join(distImagesDir, file);
                
                // Por simplicidade, apenas copiamos as imagens
                // Em produção real, usaríamos imagemin
                fs.copyFileSync(sourcePath, destPath);
            });
            
            console.log(`✅ ${files.length} imagens copiadas`);
        }
    }

    generateManifest() {
        console.log('📦 Gerando manifesto...');
        
        const manifest = {
            version: "1.0.0",
            buildDate: new Date().toISOString(),
            files: {
                css: "css/main.min.css",
                js: "js/main.min.js",
                html: "index.html"
            },
            features: [
                "SPA (Single Page Application)",
                "WCAG 2.1 AA Compliance",
                "Keyboard Navigation",
                "Screen Reader Support",
                "High Contrast Mode",
                "Dark Mode",
                "Font Size Controls",
                "Semantic HTML5",
                "Modern CSS Grid/Flexbox",
                "ES6+ JavaScript"
            ]
        };
        
        fs.writeFileSync(
            path.join(this.distDir, 'manifest.json'),
            JSON.stringify(manifest, null, 2)
        );
        
        console.log('✅ Manifesto gerado');
    }
}

// Executar se chamado diretamente
if (require.main === module) {
    const optimizer = new ProductionOptimizer();
    optimizer.build().catch(console.error);
}

module.exports = ProductionOptimizer;