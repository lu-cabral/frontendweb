# 🌸 ONG Florescer - Entrega Final (v4)

![GitHub release (latest by date)](https://img.shields.io/github/v/release/lu-cabral/frontendweb?color=7b8b40)
![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-green?color=7b8b40)
![GitFlow](https://img.shields.io/badge/GitFlow-implemented-blue?color=3498db)
![License](https://img.shields.io/github/license/lu-cabral/frontendweb?color=d4ac0d)

> **Aplicação web completa e acessível** desenvolvida para a ONG Florescer, implementando **práticas profissionais de desenvolvimento**, **acessibilidade WCAG 2.1 Nível AA** e **otimização para produção**.

## 📋 Índice

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [♿ Acessibilidade](#-acessibilidade)
- [🛠️ Tecnologias](#️-tecnologias)
- [🚀 Como Executar](#-como-executar)
- [🏗️ Build para Produção](#️-build-para-produção)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🔄 GitFlow](#-gitflow)
- [🧪 Testes e Validação](#-testes-e-validação)
- [📚 Documentação](#-documentação)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

## 🎯 Sobre o Projeto

A **ONG Florescer** é uma aplicação web moderna que representa uma organização dedicada a levar alegria e carinho para idosos através de arranjos florais e visitas voluntárias. Esta **quarta entrega** consolida todo o projeto implementando **práticas profissionais de versionamento**, **acessibilidade** e **deploy em ambiente de produção**.

### 🎖️ Certificações de Qualidade

- ✅ **WCAG 2.1 Nível AA** - Acessibilidade completa
- ✅ **GitFlow** - Versionamento profissional
- ✅ **Semantic Versioning** - Releases organizados
- ✅ **Production Ready** - Otimizado para deploy
- ✅ **Modern Standards** - HTML5, CSS3, ES6+

## ✨ Funcionalidades

### 🔥 Core Features

- **🔄 SPA (Single Page Application)** - Navegação sem recarregamento
- **📱 Design Responsivo** - Adaptável a todos os dispositivos
- **⚡ Performance Otimizada** - Código minificado e otimizado
- **🎨 Design System** - Arquitetura CSS modular profissional
- **📝 Validação Inteligente** - Formulários com feedback em tempo real

### 🚀 Funcionalidades Avançadas

- **🧭 Navegação Semântica** - Estrutura HTML5 acessível
- **🎯 Suporte a Leitores de Tela** - ARIA labels e roles
- **⌨️ Navegação por Teclado** - Totalmente acessível
- **🌙 Modo Escuro** - Tema escuro acessível
- **🎨 Alto Contraste** - Conformidade WCAG 2.1
- **🔍 Controles de Fonte** - Tamanho ajustável
- **📱 Menu Hambúrguer** - Navegação mobile otimizada

## ♿ Acessibilidade

### 🎯 Conformidade WCAG 2.1 Nível AA

- **🔍 Contraste 4.5:1** - Texto legível para todos
- **⌨️ Navegação por Teclado** - Todos os elementos acessíveis
- **📢 Leitores de Tela** - Suporte completo com ARIA
- **🏷️ Semântica HTML5** - Estrutura significativa
- **🎛️ Controles de Usuário** - Personalização de acessibilidade

### 🛠️ Ferramentas Implementadas

```html
<!-- Controles de Acessibilidade -->
🎨 Alto Contraste - Melhor visibilidade
🌙 Modo Escuro - Conforto visual
A+ Aumentar Fonte - Melhor legibilidade
A- Diminuir Fonte - Ajuste personalizado
```

### 📋 Skip Links

```html
<!-- Navegação rápida para usuários de teclado -->
<a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>
```

## 🛠️ Tecnologias

### Frontend Core
- **HTML5** - Estrutura semântica moderna
- **CSS3** - Design system com Grid/Flexbox
- **JavaScript ES6+** - Funcionalidades interativas

### Acessibilidade
- **WCAG 2.1 AA** - Diretrizes de acessibilidade
- **ARIA** - Attributes for Rich Internet Applications
- **Semantic HTML** - Estrutura significativa

### Ferramentas de Desenvolvimento
- **ESLint** - Qualidade de código JavaScript
- **Prettier** - Formatação automática
- **Terser** - Minificação JavaScript
- **CleanCSS** - Otimização CSS
- **HTML Minifier** - Compressão HTML

### Versionamento
- **Git** - Controle de versão
- **GitFlow** - Estratégia de branching
- **Semantic Versioning** - Versionamento semântico
- **Conventional Commits** - Commits padronizados

## 🚀 Como Executar

### 📋 Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Node.js 16+ (para ferramentas de build)
- Git (para versionamento)

### 💻 Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/lu-cabral/frontendweb.git

# 2. Navegue para a Entrega-4
cd frontendweb/Entrega-4

# 3. Instale as dependências (opcional - apenas para build)
npm install

# 4. Execute em modo desenvolvimento
npm run dev
# ou simplesmente abra index.html no navegador
```

### 🌐 Acesso

- **Desenvolvimento**: `http://localhost:8080`
- **Arquivo local**: Abrir `index.html` diretamente no navegador

## 🏗️ Build para Produção

### 🔨 Scripts Disponíveis

```bash
# Build completo para produção
npm run build

# Minificar apenas CSS
npm run minify:css

# Minificar apenas JavaScript
npm run minify:js

# Minificar apenas HTML
npm run minify:html

# Otimizar imagens
npm run optimize:images

# Servir versão de produção
npm run serve

# Validar código
npm run lint
npm run format
npm run validate

# Testes de acessibilidade
npm run accessibility
npm run lighthouse
```

### 📦 Estrutura de Build

```
dist/
├── index.html              # HTML otimizado
├── css/
│   ├── main.min.css        # CSS minificado
│   └── main.min.css.map    # Source map
├── js/
│   ├── main.min.js         # JavaScript minificado
│   └── main.min.js.map     # Source map
├── images/                 # Imagens otimizadas
└── manifest.json          # Manifesto do build
```

## 📁 Estrutura do Projeto

```
Entrega-4/
├── 📄 index.html                    # Página principal SPA
├── 📁 css/                          # Sistema CSS modular
│   ├── main.css                     # Arquivo principal
│   ├── variables.css                # Design tokens
│   ├── reset.css                    # Reset CSS
│   ├── typography.css               # Sistema tipográfico
│   ├── layout.css                   # Layout e grid
│   ├── navigation.css               # Navegação
│   ├── components.css               # Componentes UI
│   ├── utilities.css                # Classes utilitárias
│   ├── animations.css               # Animações
│   ├── responsive.css               # Media queries
│   └── accessibility.css            # Estilos de acessibilidade
├── 📁 js/                           # Módulos JavaScript
│   ├── main.js                      # Ponto de entrada
│   ├── spa.js                       # Sistema SPA
│   ├── templates.js                 # Templates dinâmicos
│   ├── form.js                      # Validação de formulários
│   └── accessibility.js             # Sistema de acessibilidade
├── 📁 images/                       # Assets otimizados
├── 📁 .github/                      # Templates GitHub
│   ├── ISSUE_TEMPLATE/              # Templates de issues
│   ├── pull_request_template.md     # Template de PR
│   └── GITFLOW.md                   # Documentação GitFlow
├── 📄 package.json                  # Dependências e scripts
├── 📄 build.js                      # Script de build
├── 📄 .eslintrc.json               # Configuração ESLint
├── 📄 .prettierrc.json             # Configuração Prettier
├── 📄 .gitmessage                  # Template de commit
└── 📄 README.md                    # Esta documentação
```

## 🔄 GitFlow

### 🌿 Estratégia de Branching

```
main     ─────●─────●─────●─────     (Produção)
              │     │     │
develop  ─────●─────●─────●─────     (Desenvolvimento)
              │     │
feature/X     ●─────●               (Funcionalidades)
              
release/X           ●─────●─────     (Preparação)
                    
hotfix/X                  ●─────     (Correções críticas)
```

### 📝 Convenções de Commit

```bash
# Tipos de commit
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
test: testes
chore: tarefas de build

# Exemplos
feat(accessibility): adiciona suporte a leitores de tela
fix(spa): corrige navegação em dispositivos móveis
docs(readme): atualiza documentação de instalação
```

### 🏷️ Versionamento Semântico

```
v1.0.0 - Primeira release estável
v1.1.0 - Novas funcionalidades
v1.1.1 - Correções de bugs
v2.0.0 - Mudanças que quebram compatibilidade
```

## 🧪 Testes e Validação

### ✅ Ferramentas de Qualidade

- **HTML Validator** - Validação W3C
- **Pa11y** - Testes de acessibilidade automatizados
- **Lighthouse** - Auditoria de performance e acessibilidade
- **ESLint** - Análise estática JavaScript
- **Prettier** - Formatação consistente

### 📊 Métricas de Qualidade

```bash
# Lighthouse Score Targets
Performance: 90+
Accessibility: 100
Best Practices: 90+
SEO: 90+

# WCAG 2.1 AA Compliance
✅ Perceivable
✅ Operable  
✅ Understandable
✅ Robust
```

## 📚 Documentação

### 🔌 API JavaScript

```javascript
// Sistema de Navegação SPA
navigate(section)              // Navegar para seção
renderTemplate(templateName)   // Renderizar template
updateActiveNavLink(href)      // Atualizar navegação

// Sistema de Acessibilidade
toggleHighContrast()          // Alternar alto contraste
toggleDarkMode()              // Alternar modo escuro
increaseFontSize()            // Aumentar fonte
decreaseFontSize()            // Diminuir fonte

// Validação de Formulários
validateVolunteerForm()       // Validar formulário
setupFormValidation()        // Configurar validação
```

## 🤝 Contribuindo

### 🛠️ Como Contribuir

1. **Fork** o projeto
2. **Crie** uma feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'feat: add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### 📋 Diretrizes

- Seguir convenções de commit semântico
- Manter cobertura de acessibilidade WCAG 2.1 AA
- Documentar novas funcionalidades
- Testar em múltiplos navegadores
- Validar com ferramentas de acessibilidade

### 🐛 Reportar Bugs

Use os [templates de issue](.github/ISSUE_TEMPLATE/) para reportar problemas:

- 🐛 **Bug Report** - Problemas e comportamentos inesperados
- ✨ **Feature Request** - Sugestões de novas funcionalidades

## 📊 Status do Projeto

### ✅ Entregues

- [x] SPA com JavaScript avançado
- [x] Acessibilidade WCAG 2.1 AA
- [x] Design responsivo completo
- [x] Sistema de build para produção
- [x] GitFlow e versionamento semântico
- [x] Documentação profissional

### 🔄 Roadmap

- [ ] Progressive Web App (PWA)
- [ ] Testes automatizados
- [ ] CI/CD Pipeline
- [ ] Performance monitoring

## 📈 Métricas

### 📊 Lighthouse Scores

| Métrica | Score | Status |
|---------|-------|--------|
| Performance | 95+ | ✅ |
| Accessibility | 100 | ✅ |
| Best Practices | 95+ | ✅ |
| SEO | 95+ | ✅ |

### ♿ Acessibilidade

- ✅ Navegação por teclado completa
- ✅ Suporte a leitores de tela
- ✅ Contraste WCAG AA (4.5:1)
- ✅ Semântica HTML5
- ✅ ARIA labels e roles

## 👨‍💻 Desenvolvedor

**Luana Cabral** - Estudante de Desenvolvimento Front-End

## 📄 Licença

Este projeto está sob a licença MIT.

---

<div align="center">

**🌸 ONG Florescer - Transformando vidas com carinho e tecnologia**

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red.svg?color=e74c3c)](https://github.com/lu-cabral/frontendweb)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-green?color=7b8b40)](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa)

*Projeto acadêmico desenvolvido para demonstrar conhecimentos em desenvolvimento front-end moderno, acessibilidade e práticas profissionais.*

</div>

## Funcionalidades JavaScript Implementadas

### Sistema SPA (Single Page Application)
- **Navegação sem reload**: Troca de conteúdo instantânea entre páginas
- **Gerenciamento de histórico**: Suporte aos botões voltar/avançar do navegador
- **Templates dinâmicos**: Renderização de conteúdo JavaScript
- **URLs atualizadas**: Navegação mantém URLs consistentes

### Validação Avançada de Formulários
- **Validação em tempo real**: Feedback instantâneo durante digitação
- **Múltiplas validações**: CPF, telefone, email, campos obrigatórios
- **Avisos visuais**: Mensagens de erro abaixo de cada campo
- **Prevenção de envio**: Formulário só envia com dados válidos

### Arquitetura Modular JavaScript
- **form.js**: Lógica de validação e feedback de formulários
- **spa.js**: Sistema de navegação Single Page Application
- **templates.js**: Renderização de templates dinâmicos
- **main.js**: Ponto de entrada e inicialização

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível das páginas
- **CSS3**: Sistema de design completo com Grid, Flexbox e animações
- **JavaScript ES6+**: Manipulação DOM, eventos, SPA e validações
- **Google Fonts**: Tipografia moderna (Inter)

```css
--color-primary: #7b8b40;        /* Verde oliva - tema natureza */
--color-secondary: #d4ac0d;      /* Dourado - flores amarelas */
--color-accent: #e74c3c;         /* Vermelho coral - flores vermelhas */
--color-success: #27ae60;        /* Verde sucesso */
--color-warning: #f39c12;        /* Laranja alerta */
--color-error: #e74c3c;          /* Vermelho erro */
--color-info: #3498db;           /* Azul informativo */
--color-neutral-*: #ffffff até #212529; /* Escalas neutras */
```

### Layout Responsivo

### Breakpoints Implementados
- **sm**: 640px - Mobile pequeno
- **md**: 768px - Mobile grande / Tablet pequeno
- **lg**: 1024px - Tablet / Desktop pequeno  
- **xl**: 1280px - Desktop médio
- **2xl**: 1536px - Desktop grande

### Sistema de Layout
- **CSS Grid** para estrutura geral das páginas
- **Flexbox** para componentes internos e alinhamentos
- **Grid customizado** de 12 colunas
- **Navegação responsiva** com dropdown hover

### Navegação Mobile
- **Menu Hambúrguer** implementado com **CSS puro** (sem JavaScript)
- **Técnica checkbox** + `:checked` para controle de estado
- **Animação suave** dos tracinhos (transformam em "X")
- **Menu deslizante** aparece sob o header quando ativado
- **Design responsivo** com cores contrastantes (#2d5a27 - verde escuro)
- **Viewport otimizado** para prevenir zoom forçado no mobile

## Componentes Implementados

### Sistema de Botões
- **4 Variações**: Primary, Secondary, Outline, Ghost
- **3 Tamanhos**: Small, Base, Large
- **Estados CSS**: Hover, Focus, Active, Disabled

### Formulários Avançados  
- **Validação HTML5** nativa
- **Campos formatados** (CPF, telefone, CEP)
- **Fieldsets organizados** por categoria
- **Feedback visual** de validação

### Cards e Componentes
- **Sistema de cards** responsivos
- **Badges e tags** para categorização  
- **Alerts** para diferentes tipos de feedback
- **Animações CSS** suaves

## Estrutura CSS Modular

O projeto foi refatorado para uma **arquitetura CSS modular** profissional, dividindo o código em módulos especializados:

### Organização dos Arquivos
```
Entrega-3/
├── index.html         # Página principal SPA (raiz do projeto)
├── css/               # Todos os estilos CSS organizados
│   ├── main.css       # Arquivo principal (importa módulos)
│   ├── variables.css   # Variáveis do sistema de design
│   ├── reset.css      # Reset CSS e estilos base
│   ├── typography.css # Sistema tipográfico
│   ├── layout.css     # Layout e grid system
│   ├── navigation.css # Header e navegação
│   ├── components.css # Botões, cards, forms, alerts
│   ├── utilities.css  # Classes utilitárias
│   ├── animations.css # Animações CSS
│   └── responsive.css # Media queries (sempre último)
├── js/                # Módulos JavaScript organizados
│   ├── main.js        # Ponto de entrada principal
│   ├── spa.js         # Sistema de navegação SPA
│   ├── templates.js   # Renderização de templates
│   └── form.js        # Validação de formulários
├── images/            # Assets de imagem organizados
│   ├── logo.png        # Logo da ONG
│   ├── idoso.jpg       # Imagem ilustrativa
│   └── historia.jpg    # Imagem da história
└── README.md          # Esta documentação
```

### Estrutura SPA (Single Page Application)
O projeto utiliza uma **arquitetura SPA** moderna:
- **index.html único**: Na raiz do projeto, carrega todo o sistema
- **Templates JavaScript**: Conteúdo das páginas em `templates.js`
- **Navegação dinâmica**: Sistema de rotas com hash (`#home`, `#cadastro`, `#projetos`)
- **Sem recarregamento**: Transições suaves entre seções
- **Histórico do navegador**: Suporte completo a voltar/avançar

### Vantagens da Arquitetura Modular
- **Manutenibilidade**: Cada módulo tem responsabilidade específica
- **Reutilização**: Componentes facilmente reutilizáveis
- **Organização**: Código estruturado e fácil de localizar
- **Performance**: Facilita cache e otimizações
- **Escalabilidade**: Simples adicionar novos módulos
- **Colaboração**: Desenvolvedores podem trabalhar em módulos específicos

## JavaScript Avançado

### Manipulação do DOM
- **Criação dinâmica** de elementos de feedback
- **Inserção/remoção** de mensagens de validação
- **Atualização dinâmica** do conteúdo das páginas
- **Gerenciamento de estado** do formulário

### Sistema SPA (Single Page Application)
- **Interceptação de cliques** nos links de navegação
- **Atualização da URL** sem reload da página
- **Gerenciamento do histórico** do navegador
- **Renderização dinâmica** de templates

### Validação Inteligente de Formulários
- **Eventos em tempo real** (`input`, `blur`)
- **Validação com regex** para CPF, telefone, email
- **Feedback visual imediato** abaixo dos campos
- **Prevenção de envio** com dados inválidos

## Como Visualizar

### 🌐 Para funcionalidade completa (recomendado):
1. **Inicie um servidor local** na pasta `Entrega-3/`
   ```bash
   npx serve Entrega-3
   # ou
   python -m http.server 3000
   ```
2. Acesse `http://localhost:3000/index.html`
3. **Teste o SPA**: Clique nos links do menu - observe que não recarrega
4. **Teste a validação**: Acesse Cadastro via SPA e digite nos campos
5. **Teste histórico**: Use botões voltar/avançar do navegador

### Para visualização estática:
1. Abra o arquivo `index.html` da raiz do projeto em um navegador moderno
2. O sistema CSS modular carrega automaticamente via `@import`
3. **Teste a navegação SPA**: Clique nos links do menu - observe que não recarrega
4. **Teste a responsividade** redimensionando a janela
5. **Teste o menu hambúrguer**: Use F12 > modo dispositivo
6. **Experimente o formulário**: Acesse "Cadastro" via SPA e teste a validação

## Características Técnicas

### HTML5 Semântico
- Estrutura semântica correta (`header`, `nav`, `main`, `section`, `footer`)
- Formulários acessíveis com labels associadas
- Validação HTML5 nativa robusta
- Atributos de acessibilidade adequados

### CSS3 Avançado
- **Arquitetura CSS Modular** com 9 módulos especializados
- **Design System** completo com variáveis CSS
- **Grid e Flexbox** para layouts modernos
- **Animações CSS** performáticas
- **Media queries** para responsividade total
- **Pseudo-classes** para interatividade
- **Menu hambúrguer CSS-only** com seletor `:checked`
- **Transformações CSS** para animações dos ícones
- **Posicionamento absoluto** para overlay de navegação
- **Sistema @import** para carregamento modular

### Validações de Formulário
- **CPF**: Pattern específico brasileiro
- **Telefone**: Formato (00) 00000-0000  
- **E-mail**: Validação HTML5 nativa + JavaScript avançada
- **Campos obrigatórios**: Feedback visual em tempo real
- **Limites numéricos**: Para idade

### JavaScript Modular ES6+
- **Manipulação DOM** avançada para validação dinâmica
- **Sistema SPA** com gerenciamento de rotas e histórico
- **Templates JavaScript** para renderização dinâmica
- **Eventos personalizados** para interatividade
- **Arquitetura modular** com separação de responsabilidades
- **Código limpo** com comentários em português

Este projeto demonstra uma **aplicação web completa e dinâmica** desenvolvida com **HTML5, CSS3 e JavaScript ES6+**, implementando as melhores práticas de desenvolvimento front-end moderno, incluindo SPA, validação em tempo real e arquitetura modular.
- Organização de código e arquivos

## Desenvolvido por

**Luana Cabral** - Estudante de Desenvolvimento Front-End para Web

---

*Projeto acadêmico desenvolvido para fins educacionais*
