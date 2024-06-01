const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('nome').value;
    const address = document.getElementById('endereço').value;
    const phone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('assunto').value;

    // Send the contact data to the email address
    const mailTo = 'your-email@example.com';
    const body = `Nome: ${name}\nEndereço: ${address}\nTelefone: ${phone}\nEmail: ${email}\nAssunto: ${subject}`;
    window.open(`mailto:${mailTo}?subject=${subject}&body=${body}`);

    // OR, send the contact data to WhatsApp
    const whatsappNumber = '55';
    const whatsappMessage = `Olá, eu sou ${name} e gostaria de entrar em contato.\nEndereço: ${address}\nTelefone: ${phone}\nEmail: ${email}\nAssunto: ${subject}`;
    window.open(`https://wa.me/${5521982474502}?text=${Olá seja bem vindo a dcab segurança eletronica.}`);

    // Clear the form fields
    form.reset();
});