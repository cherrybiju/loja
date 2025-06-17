document.querySelectorAll('.btn-whatsapp').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');
    const phone = '5599083794'; // troca pro seu número aqui (sem +, só números)
    const message = `Quero comprar a ${name} por R$ ${price}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, '_blank');
  });
});
