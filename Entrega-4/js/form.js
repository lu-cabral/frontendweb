// Lógica de validação do formulário de voluntários
function validateVolunteerForm(form) {
    let valid = true;
    let messages = [];

    // Nome
    const nome = form.nome.value.trim();
    if (nome.length < 3) {
        valid = false;
        messages.push('Nome completo deve ter pelo menos 3 caracteres.');
    }

    // CPF
    const cpf = form.CPF.value.trim();
    const cpfPattern = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
    if (!cpfPattern.test(cpf)) {
        valid = false;
        messages.push('CPF inválido. Use o formato 000.000.000-00.');
    }

    // Data de nascimento e idade
    const nascimento = form.nascimento.value;
    const idade = parseInt(form.idade.value, 10);
    if (!nascimento) {
        valid = false;
        messages.push('Informe a data de nascimento.');
    }
    if (isNaN(idade) || idade < 18 || idade > 120) {
        valid = false;
        messages.push('Idade deve ser entre 18 e 120 anos.');
    }

    // Email
    const email = form.email.value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        valid = false;
        messages.push('E-mail inválido.');
    }

    // Telefone
    const telefone = form.telefone.value.trim();
    const telPattern = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;
    if (!telPattern.test(telefone)) {
        valid = false;
        messages.push('Telefone inválido. Use o formato (00) 00000-0000.');
    }

    // Endereço
    if (form.endereco.value.trim().length < 5) {
        valid = false;
        messages.push('Endereço deve ter pelo menos 5 caracteres.');
    }

    // CEP
    const cep = form.cep.value.trim();
    const cepPattern = /^[0-9]{5}-[0-9]{3}$/;
    if (!cepPattern.test(cep)) {
        valid = false;
        messages.push('CEP inválido. Use o formato 00000-000.');
    }

    // Cidade
    if (form.cidade.value.trim().length < 2) {
        valid = false;
        messages.push('Informe a cidade.');
    }

    // Estado
    if (!form.estado.value) {
        valid = false;
        messages.push('Selecione o estado.');
    }

    // Termos
    if (!form.termos.checked) {
        valid = false;
        messages.push('Você deve concordar com os termos para se cadastrar.');
    }

    // Disponibilidade (pelo menos um)
    const disponibilidade = form.querySelectorAll('input[name="disponibilidade[]"]:checked');
    if (disponibilidade.length === 0) {
        valid = false;
        messages.push('Selecione pelo menos uma opção de disponibilidade.');
    }

    // Feedback visual
    const feedback = document.getElementById('form-feedback');
    if (feedback) feedback.remove();
    const msgDiv = document.createElement('div');
    msgDiv.id = 'form-feedback';
    msgDiv.style.margin = '16px 0';
    msgDiv.style.padding = '12px';
    msgDiv.style.borderRadius = '6px';
    msgDiv.style.background = valid ? '#e6ffed' : '#ffe6e6';
    msgDiv.style.color = valid ? '#1a7f37' : '#d32f2f';
    msgDiv.style.fontWeight = '500';
    msgDiv.innerHTML = valid ? 'Cadastro realizado com sucesso!' : messages.join('<br>');
    form.parentNode.insertBefore(msgDiv, form.nextSibling);

    return valid;
}

// Configuração da validação do formulário
function setupFormValidation() {
    // Função para mostrar erro abaixo do campo
    function showFieldError(input, message) {
        let errorDiv = input.parentNode.querySelector('.field-error');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'field-error';
            errorDiv.style.color = '#d32f2f';
            errorDiv.style.fontSize = '0.9em';
            errorDiv.style.marginTop = '4px';
            input.parentNode.appendChild(errorDiv);
        }
        errorDiv.textContent = message;
    }

    function clearFieldError(input) {
        let errorDiv = input.parentNode.querySelector('.field-error');
        if (errorDiv) errorDiv.textContent = '';
    }

    // Validação em tempo real para cada campo
    const fields = [
        { id: 'nome', validate: v => v.trim().length >= 3, msg: 'Nome completo deve ter pelo menos 3 caracteres.' },
        { id: 'CPF', validate: v => /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/.test(v), msg: 'CPF inválido. Use o formato 000.000.000-00.' },
        { id: 'nascimento', validate: v => !!v, msg: 'Informe a data de nascimento.' },
        { id: 'idade', validate: v => !isNaN(parseInt(v,10)) && parseInt(v,10) >= 18 && parseInt(v,10) <= 120, msg: 'Idade deve ser entre 18 e 120 anos.' },
        { id: 'email', validate: v => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v), msg: 'E-mail inválido.' },
        { id: 'telefone', validate: v => /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/.test(v), msg: 'Telefone inválido. Use o formato (00) 00000-0000.' },
        { id: 'endereco', validate: v => v.trim().length >= 5, msg: 'Endereço deve ter pelo menos 5 caracteres.' },
        { id: 'cep', validate: v => /^[0-9]{5}-[0-9]{3}$/.test(v), msg: 'CEP inválido. Use o formato 00000-000.' },
        { id: 'cidade', validate: v => v.trim().length >= 2, msg: 'Informe a cidade.' }
    ];

    fields.forEach(f => {
        const input = document.getElementById(f.id);
        if (input) {
            input.addEventListener('input', function() {
                if (!f.validate(input.value)) {
                    showFieldError(input, f.msg);
                } else {
                    clearFieldError(input);
                }
            });
            input.addEventListener('blur', function() {
                if (!f.validate(input.value)) {
                    showFieldError(input, f.msg);
                } else {
                    clearFieldError(input);
                }
            });
        }
    });
    const form = document.getElementById('volunteer-form');
    if (!form) {
        return;
    } else {
        // Evento de click no botão de submit
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.addEventListener('click', function(e) {
                // Intercepta o envio do formulário
                e.preventDefault();
                if (validateVolunteerForm(form)) {
                    form.reset();
                }
            });
        }
    }
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateVolunteerForm(form)) {
            // Simula envio (pode ser expandido para AJAX)
            form.reset();
        }
    });
}
window.validateVolunteerForm = validateVolunteerForm;
window.setupFormValidation = setupFormValidation;
