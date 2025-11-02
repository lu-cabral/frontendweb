// Lógica de navegação SPA
function navigate(page) {
    // Trata hash na navegação
    let hash = '';
    if (page.includes('#')) {
        hash = page.split('#')[1];
        page = page.split('#')[0];
    }
    
    // Extrai o nome da página da URL (ex: "cadastro.html" -> "cadastro")
    let pageName = page.replace('.html', '').replace(/.*\//, '');
    
    // Mapeia páginas para templates
    const pageMap = {
        'index': 'home',
        'cadastro': 'cadastro',
        'projetos': 'projetos'
    };
    
    const templateName = pageMap[pageName] || 'home';
    
    // Atualiza a URL sem recarregar (apenas se não for protocolo file://)
    try {
        if (window.location.protocol !== 'file:') {
            window.history.pushState({ page: templateName, hash: hash }, '', hash ? page + '#' + hash : page);
        }
    } catch (e) {
        console.log('pushState não disponível:', e.message);
    }
    
    // Renderiza o template
    if (typeof renderTemplate === 'function') {
        renderTemplate(templateName);
        
        // Re-inicializa validação se for página de cadastro
        if (templateName === 'cadastro' && typeof setupFormValidation === 'function') {
            setTimeout(setupFormValidation, 100);
        }
        
        // Se houver hash, faz scroll após renderização
        if (hash) {
            setTimeout(function() {
                const el = document.getElementById(hash);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    }
}

// Intercepta cliques nos links de navegação
function setupSPANavigation() {
    document.addEventListener('click', function(e) {
        // Intercepta links com .html ou itens do dropdown
        const link = e.target.closest('a[href*=".html"], a.dropdown-item');
        
        if (link && !link.target && !link.href.startsWith('http')) {
            e.preventDefault();
            // Preserva o href original com hash
            let href = link.getAttribute('href');
            navigate(href);
        }
    });
}

// Gerencia navegação do histórico do navegador (voltar/avançar)
window.addEventListener('popstate', function(e) {
    // Para protocolo file://, detecta a página pela URL atual
    let currentPage = 'home';
    if (window.location.pathname.includes('cadastro')) currentPage = 'cadastro';
    else if (window.location.pathname.includes('projetos')) currentPage = 'projetos';
    
    if (e.state && e.state.page) {
        currentPage = e.state.page;
    }
    
    if (typeof renderTemplate === 'function') {
        renderTemplate(currentPage);
        
        // Re-inicializa validação se necessário
        if (currentPage === 'cadastro' && typeof setupFormValidation === 'function') {
            setTimeout(setupFormValidation, 100);
        }
        
        // Se houver hash, faz scroll após renderização
        if (e.state && e.state.hash) {
            setTimeout(function() {
                const el = document.getElementById(e.state.hash);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    }
});

window.navigate = navigate;
window.setupSPANavigation = setupSPANavigation;
