// Sistema de renderização de templates

// Templates para cada página
const templates = {
    home: `
        <section class="hero" role="banner" aria-labelledby="hero-title">
            <div class="container">
                <h1 id="hero-title" class="hero-title">Transformando Vidas com Carinho</h1>
                <p class="hero-subtitle">Levamos alegria e flores para idosos em casas de repouso, espalhando sorrisos e momentos especiais.</p>
                <div class="flex justify-center gap-4 mt-4" role="group" aria-label="Ações principais">
                    <button onclick="navigate('#projetos')" class="btn btn-secondary btn-lg" aria-describedby="volunteer-desc">
                        Seja Voluntário
                        <span id="volunteer-desc" class="sr-only">Clique para ver como se tornar voluntário</span>
                    </button>
                    <button onclick="document.getElementById('historia').scrollIntoView({behavior: 'smooth'})" class="btn btn-outline btn-lg" aria-describedby="history-desc">
                        Nossa História
                        <span id="history-desc" class="sr-only">Clique para conhecer a história da ONG</span>
                    </button>
                </div>
            </div>
        </section>

        <section class="section" aria-labelledby="impact-title">
            <div class="container">
                <h2 id="impact-title" class="section-title text-center mb-8">Nosso Impacto</h2>
                <div class="grid grid-cols-4 gap-4 text-center" role="region" aria-label="Estatísticas de impacto">
                    <article class="card">
                        <div class="card-body">
                            <div style="font-size: 2.5rem; font-weight: bold; color: var(--color-primary);" aria-label="150 idosos atendidos">150+</div>
                            <p class="text-sm text-neutral-600">Idosos Atendidos</p>
                        </div>
                    </article>
                    <article class="card">
                        <div class="card-body">
                            <div style="font-size: 2.5rem; font-weight: bold; color: var(--color-primary);" aria-label="45 voluntários ativos">45+</div>
                            <p class="text-sm text-neutral-600">Voluntários Ativos</p>
                        </div>
                    </article>
                    <article class="card">
                        <div class="card-body">
                            <div style="font-size: 2.5rem; font-weight: bold; color: var(--color-primary);" aria-label="12 casas de repouso">12</div>
                            <p class="text-sm text-neutral-600">Casas de Repouso</p>
                        </div>
                    </article>
                    <article class="card">
                        <div class="card-body">
                            <div style="font-size: 2.5rem; font-weight: bold; color: var(--color-primary);" aria-label="Mais de 500 arranjos entregues">500+</div>
                            <p class="text-sm text-neutral-600">Arranjos Entregues</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <section id="historia" class="section" aria-labelledby="history-title">
            <div class="container">
                <h2 class="section-title">Nossa História</h2>
                <div class="grid grid-cols-2 gap-6 items-stretch">
                    <div>
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text">A ONG Florescer nasceu do sonho de um grupo de amigos apaixonados por flores e pelo desejo de espalhar alegria. Eles perceberam que muitos idosos em casas de repouso sentiam falta de carinho, especialmente em datas comemorativas como aniversários, Natal e Dia das Mães.</p>
                                <p class="card-text">Com criatividade e dedicação, os voluntários começaram a montar arranjos de flores coloridas, cada um feito com muito cuidado e uma mensagem especial. Em cada entrega, além das flores, levavam sorrisos, conversas e momentos de afeto.</p>
                                <p class="card-text">Logo, a iniciativa ganhou apoio da comunidade. Floriculturas passaram a doar flores, escolas ajudaram a escrever cartões e mais voluntários se juntaram ao projeto. A ONG Florescer se tornou conhecida por transformar datas especiais em dias inesquecíveis para centenas de idosos, mostrando que pequenos gestos podem florescer grandes alegrias.</p>
                                <div class="mt-4">
                                    <span class="tag">Solidariedade</span>
                                    <span class="tag">Comunidade</span>
                                    <span class="tag">Transformação Social</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card card-full-height">
                            <img src="images/historia.jpg" alt="História da ONG Florescer" class="card-image">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section" style="background-color: var(--color-neutral-200);">
            <div class="container">
                <h2 class="section-title">Missão, Visão e Valores</h2>
                <div class="grid grid-cols-3 gap-6">
                    <div class="card project-card">
                        <div class="card-header text-center">
                            <h3 class="card-title">Missão</h3>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Levar alegria e conforto a idosos em casas de repouso através da entrega de flores e momentos de carinho, promovendo o bem-estar emocional e social.</p>
                            <span class="badge badge-primary">Bem-estar</span>
                            <span class="badge badge-secondary">Carinho</span>
                        </div>
                    </div>
                    
                    <div class="card project-card">
                        <div class="card-header text-center">
                            <h3 class="card-title">Visão</h3>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Ser reconhecida como uma organização que transforma vidas, inspirando a comunidade a valorizar e cuidar dos idosos, promovendo um envelhecimento digno e feliz.</p>
                            <span class="badge badge-success">Transformação</span>
                            <span class="badge badge-warning">Dignidade</span>
                        </div>
                    </div>
                    
                    <div class="card project-card">
                        <div class="card-header text-center">
                            <h3 class="card-title">Valores</h3>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Empatia, Respeito, Solidariedade, Alegria e Compromisso com a comunidade são os pilares que guiam todas as nossas ações.</p>
                            <div class="mt-3">
                                <span class="badge badge-primary">Empatia</span>
                                <span class="badge badge-secondary">Respeito</span>
                                <span class="badge badge-success">Solidariedade</span>
                                <span class="badge badge-warning">Alegria</span>
                                <span class="badge badge-neutral">Compromisso</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container text-center">
                <div class="card" style="background: linear-gradient(135deg, var(--color-primary-light), var(--color-primary)); color: white;">
                    <div class="card-body" style="padding: var(--spacing-8);">
                        <h2 style="color: white; margin-bottom: var(--spacing-4);">Faça Parte da Nossa Missão</h2>
                        <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-6); opacity: 0.9;">Junte-se a nós e ajude a levar alegria para quem mais precisa. Cada gesto faz a diferença!</p>
                        <div class="flex justify-center gap-4">
                            <button onclick="navigate('cadastro.html')" class="btn btn-secondary btn-lg">Cadastre-se</button>
                            <button onclick="navigate('projetos.html')" class="btn btn-outline btn-lg" style="border-color: white; color: white;">Saiba Mais</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contato" class="section">
            <div class="container">
                <h2 class="section-title">Entre em Contato</h2>
                <div class="grid grid-cols-2 gap-6">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Informações de Contato</h3>
                            <div style="margin-top: var(--spacing-4);">
                                <div style="margin-bottom: var(--spacing-4);">
                                    <p class="font-weight-medium" style="margin-bottom: var(--spacing-1);">E-mail</p>
                                    <a href="mailto:ongflorescer@ong.com" class="text-primary">ongflorescer@ong.com</a>
                                </div>
                                <div style="margin-bottom: var(--spacing-4);">
                                    <p class="font-weight-medium" style="margin-bottom: var(--spacing-1);">Telefone</p>
                                    <a href="tel:(11)1234-5678" class="text-primary">(11) 1234-5678</a>
                                </div>
                                <div style="margin-bottom: var(--spacing-4);">
                                    <p class="font-weight-medium" style="margin-bottom: var(--spacing-1);">WhatsApp</p>
                                    <a href="https://wa.me/5511999999999" class="text-primary" target="_blank">(11) 99999-9999</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Horário de Atendimento</h3>
                            <div class="space-y-3">
                                <div class="flex justify-between">
                                    <span>Segunda a Sexta</span>
                                    <span class="font-weight-medium">8h às 17h</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Sábado</span>
                                    <span class="font-weight-medium">9h às 12h</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Domingo</span>
                                    <span class="text-neutral-500">Fechado</span>
                                </div>
                            </div>
                            
                            <div class="mt-4 p-3" style="background-color: var(--color-neutral-200); border-radius: var(--radius-base);">
                                <p class="text-sm text-neutral-600">
                                    <strong>Emergências:</strong> Para situações urgentes, entre em contato via WhatsApp: (11) 99999-9999
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    cadastro: `
        <section class="hero">
            <div class="container">
                <h1 class="hero-title">Cadastro de Voluntário</h1>
                <p class="hero-subtitle">Junte-se à nossa família e ajude a transformar vidas com carinho e dedicação</p>
                <div class="flex items-center justify-center gap-2 mt-4">
                    <span class="badge badge-success">Gratuito</span>
                    <span class="badge badge-primary">Sem Experiência Necessária</span>
                    <span class="badge badge-secondary">Horários Flexíveis</span>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="grid grid-cols-1 gap-8">
                    <div>
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Preencha seus dados</h3>
                                <p class="text-sm text-neutral-600">Todas as informações são confidenciais e seguras.</p>
                            </div>
                            <div class="card-body">
                                <form id="volunteer-form">
                                    <fieldset>
                                        <legend>Informações Pessoais</legend>
                                        
                                        <div class="form-group">
                                            <label for="nome" class="form-label">Nome Completo:</label>
                                            <input type="text" id="nome" name="nome" class="form-control" required>
                                        </div>

                                        <div class="form-group">
                                            <label for="CPF" class="form-label">CPF:</label>
                                            <input type="text" id="CPF" name="CPF" class="form-control" 
                                                pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}" 
                                                placeholder="000.000.000-00" 
                                                title="Formato: 000.000.000-00" 
                                                maxlength="14" required>
                                            <small class="form-help">Formato: 000.000.000-00</small>
                                        </div>
                                        
                                        <div class="grid grid-cols-2 gap-3">
                                            <div class="form-group">
                                                <label for="nascimento" class="form-label">Data de Nascimento:</label>
                                                <input type="date" id="nascimento" name="nascimento" class="form-control" required>
                                            </div>
                                            
                                            <div class="form-group">
                                                <label for="idade" class="form-label">Idade:</label>
                                                <input type="number" id="idade" name="idade" class="form-control" required 
                                                    min="18" max="120">
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <legend>Informações de Contato</legend>

                                        <div class="form-group">
                                            <label for="email" class="form-label">E-mail:</label>
                                            <input type="email" id="email" name="email" class="form-control" required>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="telefone" class="form-label">Telefone:</label>
                                            <input type="tel" id="telefone" name="telefone" class="form-control" 
                                                pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}" 
                                                placeholder="(00) 00000-0000" 
                                                title="Formato: (00) 00000-0000" 
                                                maxlength="15" required>
                                            <small class="form-help">Formato: (00) 00000-0000</small>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <legend>Endereço</legend>

                                        <div class="form-group">
                                            <label for="endereco" class="form-label">Endereço:</label>
                                            <input type="text" id="endereco" name="endereco" class="form-control" 
                                                placeholder="Rua, número, complemento" required>
                                        </div>

                                        <div class="grid grid-cols-2 gap-3">
                                            <div class="form-group">
                                                <label for="cep" class="form-label">CEP:</label>
                                                <input type="text" id="cep" name="cep" class="form-control" 
                                                    pattern="[0-9]{5}-[0-9]{3}" 
                                                    placeholder="00000-000" 
                                                    title="Formato: 00000-000" required>
                                            </div>

                                            <div class="form-group">
                                                <label for="cidade" class="form-label">Cidade:</label>
                                                <input type="text" id="cidade" name="cidade" class="form-control" required 
                                                    autocomplete="on">  
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="estado" class="form-label">Estado:</label>
                                            <select id="estado" name="estado" class="form-control form-select" required>
                                                <option value="">Selecione um estado</option>
                                                <option value="SP">São Paulo</option>
                                                <option value="RJ">Rio de Janeiro</option>
                                                <option value="MG">Minas Gerais</option>
                                                <option value="RS">Rio Grande do Sul</option>
                                            </select>    
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <legend>Disponibilidade</legend>

                                        <div class="form-group">
                                            <label class="form-label">Quando você pode ajudar?</label>
                                            <div class="grid grid-cols-2 gap-2 mt-2">
                                                <label class="flex items-center gap-2 cursor-pointer">
                                                    <input type="checkbox" name="disponibilidade[]" value="manha">
                                                    <span>Manhã (8h-12h)</span>
                                                </label>
                                                <label class="flex items-center gap-2 cursor-pointer">
                                                    <input type="checkbox" name="disponibilidade[]" value="tarde">
                                                    <span>Tarde (13h-17h)</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" name="termos" required>
                                                <span class="text-sm">Concordo em participar como voluntário da ONG Florescer</span>
                                            </label>
                                        </div>
                                    </fieldset>

                                    <div class="flex gap-3 justify-end">
                                        <button type="reset" class="btn btn-ghost">Limpar Formulário</button>
                                        <button type="submit" class="btn btn-primary btn-lg">Cadastrar como Voluntário</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    projetos: `
        <section class="hero">
            <div class="container">
                <h1 class="hero-title">Nossos Projetos Sociais</h1>
                <p class="hero-subtitle">Conheça as diferentes formas de participar e fazer a diferença na vida de nossos idosos</p>
                <div class="flex justify-center gap-4 mt-4">
                    <button onclick="setTimeout(() => document.getElementById('voluntariado').scrollIntoView({behavior: 'smooth'}), 100)" class="btn btn-secondary btn-lg">Seja Voluntário</button>
                    <button onclick="setTimeout(() => document.getElementById('doacoes').scrollIntoView({behavior: 'smooth'}), 100)" class="btn btn-outline btn-lg">Fazer Doação</button>
                </div>
            </div>
        </section>

        <section id="voluntariado" class="section">
            <div class="container">
                <h2 class="section-title">Voluntariado</h2>
                
                <div class="mb-8">
                    <p class="card-text text-center" style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-3);">Ser voluntário na ONG Florescer é uma oportunidade de espalhar alegria e carinho para idosos em casas de repouso. Para participar, basta ter vontade de ajudar e disponibilidade para dedicar algumas horas do seu tempo.</p>
                    
                    <p class="card-text text-center" style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-6);">Os voluntários colaboram na montagem de arranjos de flores, escrevem mensagens especiais e realizam visitas, levando sorrisos e atenção aos idosos, principalmente em datas comemorativas.</p>
                </div>

                <div class="grid grid-cols-3 gap-6" style="margin-bottom: var(--spacing-9);">
                    <div class="card text-center">
                        <div class="card-body">
                            <h4 class="card-title">1. Cadastro</h4>
                            <p class="card-text">Preencha o formulário com suas informações pessoais e disponibilidade.</p>
                        </div>
                    </div>
                    
                    <div class="card text-center">
                        <div class="card-body">
                            <h4 class="card-title">2. Orientação</h4>
                            <p class="card-text">Participe de uma reunião de orientação para conhecer nosso trabalho.</p>
                        </div>
                    </div>
                    
                    <div class="card text-center">
                        <div class="card-body">
                            <h4 class="card-title">3. Ação</h4>
                            <p class="card-text">Comece a fazer a diferença na vida dos idosos com nossa equipe!</p>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <button onclick="navigate('cadastro.html')" class="btn btn-primary btn-lg">Venha florescer com a gente!</button>
                </div>
            </div>
        </section>

        <section id="doacoes" class="section" style="background-color: var(--color-neutral-200);">
            <div class="container">
                <h2 class="section-title">Doações</h2>
                <div class="grid grid-cols-2 gap-6" style="align-items: stretch; margin-bottom: var(--spacing-10);">
                    <div style="display: flex;">
                        <div class="card card-full-height" style="display: flex; flex-direction: column; width: 100%; min-height: 100%;">
                            <img src="images/idoso.jpg" alt="Idoso recebendo flores" class="card-image" style="height: 200px; object-fit: cover; flex-shrink: 0;">
                            <div class="card-body" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                                <div>
                                    <h3 class="card-title">Transformando Vidas</h3>
                                    <p class="card-text">Cada doação representa um sorriso, um momento especial e uma lembrança carinhosa para nossos idosos.</p>
                                </div>
                                <div class="flex gap-2 mt-3">
                                    <span class="tag">Alegria</span>
                                    <span class="tag">Carinho</span>
                                    <span class="tag">Esperança</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="display: flex;">
                        <div class="card project-card card-full-height" style="display: flex; flex-direction: column; width: 100%; min-height: 100%;">
                            <div class="card-header" style="flex-shrink: 0;">
                                <div class="flex items-center gap-3">
                                    <span style="font-size: 2rem; color: var(--color-accent);">❤️</span>
                                    <h3 class="card-title">Como Doar</h3>
                                </div>
                            </div>
                            <div class="card-body" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                                <div>
                                    <p class="card-text">Doar para a ONG Florescer é uma forma simples e significativa de contribuir para o bem-estar de idosos em casas de repouso. Sua doação pode ser feita em dinheiro, flores, materiais para arranjos ou até mesmo cartões com mensagens de carinho.</p>
                                    
                                    <p class="card-text">Cada contribuição ajuda a levar alegria e conforto para quem mais precisa, especialmente em datas especiais.</p>
                                </div>
                                
                                <div class="alert alert-info">
                                    <strong>Transparência:</strong> Toda doação é recebida com gratidão e você pode acompanhar como ela faz a diferença na vida dos idosos atendidos.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-4 gap-4">
                    <div class="card text-center">
                        <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
                            <div>
                                <h4 class="card-title">Dinheiro</h4>
                                <p class="card-text">Contribuições financeiras para compra de materiais e manutenção dos projetos.</p>
                            </div>
                            <button onclick="setTimeout(() => document.getElementById('contato').scrollIntoView({behavior: 'smooth'}), 100)" class="btn btn-success btn-sm mt-3">Entre em contato</button>
                        </div>
                    </div>
                    
                    <div class="card text-center">
                        <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
                            <div>
                                <h4 class="card-title">Flores</h4>
                                <p class="card-text">Doação de flores frescas para a montagem dos arranjos especiais.</p>
                            </div>
                            <button onclick="setTimeout(() => document.getElementById('contato').scrollIntoView({behavior: 'smooth'}), 100)" class="btn btn-success btn-sm mt-3">Entre em contato</button>
                        </div>
                    </div>
                    
                    <div class="card text-center">
                        <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
                            <div>
                                <h4 class="card-title">Materiais</h4>
                                <p class="card-text">Fitas, vasos, papel, cartolina e outros materiais para arranjos.</p>
                            </div>
                            <button onclick="setTimeout(() => document.getElementById('contato').scrollIntoView({behavior: 'smooth'}), 100)" class="btn btn-success btn-sm mt-3">Entre em contato</button>
                        </div>
                    </div>
                    
                    <div class="card text-center">
                        <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
                            <div>
                                <h4 class="card-title">Tempo</h4>
                                <p class="card-text">Doe seu tempo e habilidades como voluntário em nossos projetos.</p>
                            </div>
                            <button onclick="navigate('cadastro.html')" class="btn btn-outline btn-sm mt-3">Voluntariar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contato" class="section">
            <div class="container">
                <h2 class="section-title">Entre em Contato</h2>
                <div class="grid grid-cols-2 gap-6">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Informações de Contato</h3>
                            <div style="margin-top: var(--spacing-4);">
                                <div style="margin-bottom: var(--spacing-4);">
                                    <p class="font-weight-medium" style="margin-bottom: var(--spacing-1);">E-mail</p>
                                    <a href="mailto:ongflorescer@ong.com" class="text-primary">ongflorescer@ong.com</a>
                                </div>
                                <div style="margin-bottom: var(--spacing-4);">
                                    <p class="font-weight-medium" style="margin-bottom: var(--spacing-1);">Telefone</p>
                                    <a href="tel:(11)1234-5678" class="text-primary">(11) 1234-5678</a>
                                </div>
                                <div style="margin-bottom: var(--spacing-4);">
                                    <p class="font-weight-medium" style="margin-bottom: var(--spacing-1);">WhatsApp</p>
                                    <a href="https://wa.me/5511999999999" class="text-primary" target="_blank">(11) 99999-9999</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Envie uma Mensagem</h3>
                            <form>
                                <div class="form-group">
                                    <label for="nome-contato" class="form-label">Nome:</label>
                                    <input type="text" id="nome-contato" name="nome" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="email-contato" class="form-label">E-mail:</label>
                                    <input type="email" id="email-contato" name="email" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="mensagem" class="form-label">Mensagem:</label>
                                    <textarea id="mensagem" name="mensagem" class="form-control form-textarea" rows="4" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Enviar Mensagem</button>
                            </form>
                            
                            <div class="alert alert-info mt-4">
                                <strong>Emergências:</strong> Para situações urgentes, entre em contato via WhatsApp: (11) 99999-9999
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};

function renderTemplate(page) {
    const main = document.querySelector('main');
    if (!main) return;
    
    // Títulos das páginas
    const pageTitles = {
        home: 'ONG Florescer - Transformando vidas com carinho',
        cadastro: 'ONG Florescer - Cadastro de Voluntário',
        projetos: 'ONG Florescer - Projetos Sociais'
    };
    
    if (templates[page]) {
        main.innerHTML = templates[page];
        
        // Atualiza o título da página
        if (pageTitles[page]) {
            document.title = pageTitles[page];
        }
        
        // Marca o link ativo no menu
        updateActiveNavLink(page);
        
    } else {
        main.innerHTML = '<section class="section"><div class="container"><h2>Página não encontrada</h2></div></section>';
        document.title = 'ONG Florescer - Página não encontrada';
    }
}

// Atualiza o link ativo no menu de navegação
function updateActiveNavLink(page) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const href = link.getAttribute('href');
        if ((page === 'home' && href === 'index.html') ||
            (page === 'cadastro' && href === 'cadastro.html') ||
            (page === 'projetos' && href === 'projetos.html')) {
            link.classList.add('active');
        }
    });
}

window.renderTemplate = renderTemplate;
