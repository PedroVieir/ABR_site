const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const sending = document.getElementById('sending');
const alertEl = document.getElementById('formAlert');
const errorEl = document.getElementById('formError');
const charCount = document.getElementById('charCount');
const mensagem = document.getElementById('mensagem');

mensagem.addEventListener('input', () => {
    charCount.textContent = `${mensagem.value.length} / 3000`;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alertEl.style.display = 'none';
    errorEl.style.display = 'none';

    const formData = new FormData(form);
    if (formData.get('website')) { // honeypot
        return;
    }

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    submitBtn.disabled = true;
    sending.style.display = 'block';

    // Simulação de envio (substitua por fetch para integrar ao backend)
    setTimeout(() => {
        submitBtn.disabled = false;
        sending.style.display = 'none';
        form.reset();
        charCount.textContent = '0 / 3000';
        alertEl.textContent = 'Mensagem enviada com sucesso. Obrigado pelo contato.';
        alertEl.style.display = 'block';
    }, 900);

    // Exemplo de fetch (descomente e ajuste a URL se integrar com backend)
    /*
    fetch('/api/contact', {
      method: 'POST',
      body: formData
    }).then(r => {
      // tratar resposta
    }).catch(err => {
      errorEl.textContent = 'Erro ao enviar. Tente novamente mais tarde.';
      errorEl.style.display = 'block';
    }).finally(() => {
      submitBtn.disabled = false;
      sending.style.display = 'none';
    });
    */
});