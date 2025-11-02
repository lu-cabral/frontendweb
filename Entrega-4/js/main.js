// Ponto de entrada principal do JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Configura navegação SPA
    if (typeof setupSPANavigation === 'function') {
        setupSPANavigation();
    }
    
    // Detecta a página atual
    const currentPage = window.location.pathname;
    
    // Renderiza o template inicial
    let pageName = 'home';
    if (currentPage.includes('cadastro')) pageName = 'cadastro';
    else if (currentPage.includes('projetos')) pageName = 'projetos';
    
    if (typeof renderTemplate === 'function') {
        renderTemplate(pageName);
    }
    
    // Configura validação do formulário
    if (typeof setupFormValidation === 'function') {
        setupFormValidation();
    }
    
    // Adiciona estado inicial ao histórico para navegação SPA (apenas se não for file://)
    try {
        if (window.location.protocol !== 'file:' && window.history.state === null) {
            window.history.replaceState({ page: pageName }, '', window.location.href);
        }
    } catch (e) {
        console.log('replaceState não disponível:', e.message);
    }
});
