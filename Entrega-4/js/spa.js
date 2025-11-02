// Lógica de navegação SPA
function navigate(page) {
    // Se começar com #, é navegação por hash
    if (page.startsWith('#')) {
        page = page.substring(1); // Remove o #
    }
    
    // Trata hash na navegação
    let hash = '';
    if (page.includes('#')) {
        hash = page.split('#')[1];
        page = page.split('#')[0];
    }
    
    // Mapeia hash/páginas para templates
    const pageMap = {
        'home': 'home',
        'cadastro': 'cadastro', 
        'projetos': 'projetos',
        'contato': 'home', // contato está na home
        'voluntariado': 'projetos', // voluntariado está em projetos
        'doacoes': 'projetos', // doacoes está em projetos
        'index': 'home',
        '': 'home' // página vazia = home
    };
    
    const templateName = pageMap[page] || 'home';
    
    // Define qual seção deve ser focada
    let targetSection = null;
    if (page === 'voluntariado') {
        targetSection = 'voluntariado';
    } else if (page === 'doacoes') {
        targetSection = 'doacoes';
    } else if (page === 'contato') {
        targetSection = 'contato';
    } else if (hash) {
        targetSection = hash;
    }
    
    // Atualiza a URL sem recarregar
    try {
        if (window.location.protocol !== 'file:') {
            const newUrl = hash ? '#' + page + '#' + hash : '#' + page;
            window.history.pushState({ page: templateName, hash: hash }, '', newUrl);
        } else {
            // Para protocolo file://, atualiza apenas o hash
            window.location.hash = page;
        }
    } catch (e) {
        console.log('Navegação não disponível:', e.message);
    }
    
    // Renderiza o template
    if (typeof renderTemplate === 'function') {
        renderTemplate(templateName);
        
        // Re-inicializa validação se for página de cadastro
        if (templateName === 'cadastro' && typeof setupFormValidation === 'function') {
            setTimeout(setupFormValidation, 100);
        }
        
        // Faz scroll para a seção específica após renderização
        if (targetSection) {
            setTimeout(function() {
                const el = document.getElementById(targetSection);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        }
    }
}

// Intercepta cliques nos links de navegação
function setupSPANavigation() {
    document.addEventListener('click', function(e) {
        // Intercepta links com href começando com # ou .html, incluindo dropdown-item
        const link = e.target.closest('a[href^="#"], a[href*=".html"], .dropdown-item, .nav-link');
        
        if (link && !link.target && !link.href.startsWith('http') && !link.href.startsWith('mailto') && !link.href.startsWith('tel')) {
            e.preventDefault();
            // Pega o href original
            let href = link.getAttribute('href');
            console.log('Navegando para:', href); // Debug
            navigate(href);
        }
    });
}

// Gerencia navegação do histórico do navegador (voltar/avançar)
window.addEventListener('popstate', function(e) {
    // Detecta página pelo hash atual
    let currentPage = 'home';
    const hash = window.location.hash.substring(1); // Remove #
    
    if (hash) {
        currentPage = hash;
    }
    
    if (e.state && e.state.page) {
        currentPage = e.state.page;
    }
    
    navigate(currentPage);
});

// Listener para mudanças de hash
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1) || 'home';
    navigate(hash);
});

window.navigate = navigate;
window.setupSPANavigation = setupSPANavigation;

// Inicialização quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    setupSPANavigation();
    
    // Navega para a página inicial ou hash atual
    const initialHash = window.location.hash.substring(1) || 'home';
    navigate(initialHash);
});
