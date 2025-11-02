# 🌸 ONG Florescer - Aplicação Web Dinâmica com JavaScript

Um site institucional desenvolvido para a **ONG Florescer**, uma organização fictícia dedicada a levar alegria e carinho para idosos em casas de repouso através de arranjos florais e visitas voluntárias.

**Esta terceira entrega transforma a interface estática em uma aplicação web dinâmica e interativa**, implementando JavaScript avançado para manipulação do DOM, validação em tempo real e sistema de Single Page Application (SPA).

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
