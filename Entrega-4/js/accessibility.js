/**
 * Sistema de Acessibilidade WCAG 2.1 Nível AA
 * Implementa controles de acessibilidade e navegação por teclado
 */

class AccessibilityManager {
    constructor() {
        this.currentFontSize = 16;
        this.isHighContrast = false;
        this.isDarkMode = false;
        this.init();
    }

    init() {
        this.setupAccessibilityControls();
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.loadUserPreferences();
        this.setupSkipLinks();
    }

    setupAccessibilityControls() {
        // Alto contraste
        const highContrastBtn = document.getElementById('toggle-high-contrast');
        if (highContrastBtn) {
            highContrastBtn.addEventListener('click', () => this.toggleHighContrast());
            highContrastBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleHighContrast();
                }
            });
        }

        // Modo escuro
        const darkModeBtn = document.getElementById('toggle-dark-mode');
        if (darkModeBtn) {
            darkModeBtn.addEventListener('click', () => this.toggleDarkMode());
            darkModeBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleDarkMode();
                }
            });
        }

        // Aumentar fonte
        const increaseFontBtn = document.getElementById('increase-font');
        if (increaseFontBtn) {
            increaseFontBtn.addEventListener('click', () => this.increaseFontSize());
            increaseFontBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.increaseFontSize();
                }
            });
        }

        // Diminuir fonte
        const decreaseFontBtn = document.getElementById('decrease-font');
        if (decreaseFontBtn) {
            decreaseFontBtn.addEventListener('click', () => this.decreaseFontSize());
            decreaseFontBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.decreaseFontSize();
                }
            });
        }
    }

    setupKeyboardNavigation() {
        // Navegação por teclado no menu dropdown
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('keydown', (e) => {
                const dropdown = toggle.closest('.dropdown');
                const menu = dropdown.querySelector('.dropdown-menu');
                
                switch (e.key) {
                    case 'Enter':
                    case ' ':
                        e.preventDefault();
                        this.toggleDropdown(dropdown);
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        this.openDropdown(dropdown);
                        this.focusFirstMenuItem(menu);
                        break;
                    case 'Escape':
                        this.closeDropdown(dropdown);
                        break;
                }
            });
        });

        // Navegação nos itens do dropdown
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach((item, index, items) => {
            item.addEventListener('keydown', (e) => {
                const dropdown = item.closest('.dropdown');
                
                switch (e.key) {
                    case 'ArrowDown':
                        e.preventDefault();
                        const nextIndex = (index + 1) % items.length;
                        items[nextIndex].focus();
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        const prevIndex = index === 0 ? items.length - 1 : index - 1;
                        items[prevIndex].focus();
                        break;
                    case 'Escape':
                        this.closeDropdown(dropdown);
                        dropdown.querySelector('.dropdown-toggle').focus();
                        break;
                    case 'Tab':
                        this.closeDropdown(dropdown);
                        break;
                }
            });
        });

        // Menu hambúrguer com teclado
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const checkbox = document.getElementById('mobile-menu-toggle');
                    checkbox.checked = !checkbox.checked;
                    this.updateAriaExpanded(menuToggle, checkbox.checked);
                }
            });
        }
    }

    setupFocusManagement() {
        // Garantir que elementos focáveis sejam visíveis
        document.addEventListener('focusin', (e) => {
            const focusedElement = e.target;
            if (focusedElement.scrollIntoViewIfNeeded) {
                focusedElement.scrollIntoViewIfNeeded();
            } else {
                focusedElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }
        });

        // Trap focus nos modais (se implementados)
        this.setupFocusTrap();
    }

    setupSkipLinks() {
        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(skipLink.getAttribute('href'));
                if (target) {
                    target.focus();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

    toggleHighContrast() {
        this.isHighContrast = !this.isHighContrast;
        document.body.classList.toggle('high-contrast', this.isHighContrast);
        this.saveUserPreferences();
        this.announceChange(`Modo de alto contraste ${this.isHighContrast ? 'ativado' : 'desativado'}`);
    }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark-mode', this.isDarkMode);
        this.saveUserPreferences();
        this.announceChange(`Modo ${this.isDarkMode ? 'escuro' : 'claro'} ativado`);
    }

    increaseFontSize() {
        if (this.currentFontSize < 24) {
            this.currentFontSize += 2;
            this.updateFontSize();
            this.announceChange(`Tamanho da fonte aumentado para ${this.currentFontSize}px`);
        }
    }

    decreaseFontSize() {
        if (this.currentFontSize > 12) {
            this.currentFontSize -= 2;
            this.updateFontSize();
            this.announceChange(`Tamanho da fonte diminuído para ${this.currentFontSize}px`);
        }
    }

    updateFontSize() {
        document.documentElement.style.setProperty('--base-font-size', `${this.currentFontSize}px`);
        this.saveUserPreferences();
    }

    toggleDropdown(dropdown) {
        const isOpen = dropdown.classList.contains('open');
        this.closeAllDropdowns();
        
        if (!isOpen) {
            this.openDropdown(dropdown);
        }
    }

    openDropdown(dropdown) {
        dropdown.classList.add('open');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle.setAttribute('aria-expanded', 'true');
    }

    closeDropdown(dropdown) {
        dropdown.classList.remove('open');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle.setAttribute('aria-expanded', 'false');
    }

    closeAllDropdowns() {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            this.closeDropdown(dropdown);
        });
    }

    focusFirstMenuItem(menu) {
        const firstItem = menu.querySelector('.dropdown-item');
        if (firstItem) {
            firstItem.focus();
        }
    }

    updateAriaExpanded(element, isExpanded) {
        element.setAttribute('aria-expanded', isExpanded.toString());
    }

    setupFocusTrap() {
        // Implementação de focus trap para modais futuros
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const modal = document.querySelector('.modal.active');
                if (modal) {
                    this.trapFocus(e, modal);
                }
            }
        });
    }

    trapFocus(e, container) {
        const focusableElements = container.querySelectorAll(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }

    announceChange(message) {
        // Criar anúncio para leitores de tela
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    saveUserPreferences() {
        const preferences = {
            fontSize: this.currentFontSize,
            highContrast: this.isHighContrast,
            darkMode: this.isDarkMode
        };
        
        localStorage.setItem('accessibilityPreferences', JSON.stringify(preferences));
    }

    loadUserPreferences() {
        const saved = localStorage.getItem('accessibilityPreferences');
        if (saved) {
            const preferences = JSON.parse(saved);
            
            this.currentFontSize = preferences.fontSize || 16;
            this.isHighContrast = preferences.highContrast || false;
            this.isDarkMode = preferences.darkMode || false;
            
            this.updateFontSize();
            
            if (this.isHighContrast) {
                document.body.classList.add('high-contrast');
            }
            
            if (this.isDarkMode) {
                document.body.classList.add('dark-mode');
            }
        }
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new AccessibilityManager();
});

// Detectar mudanças de preferências do sistema
if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', () => {
        document.body.classList.toggle('reduce-motion', mediaQuery.matches);
    });
    
    // Aplicar imediatamente se preferência já estiver definida
    if (mediaQuery.matches) {
        document.body.classList.add('reduce-motion');
    }
}