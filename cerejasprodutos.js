const fundo = document.querySelector('.background-cherry');
const footer = document.getElementById('footer');
const quantidade = 12; // 12 cerejas no máximo ao mesmo tempo

function criarCereja() {
  const cherry = document.createElement('img');
  cherry.src = 'https://cdn-icons-png.flaticon.com/512/766/766023.png';
  cherry.classList.add('falling-cherry');

  cherry.style.left = Math.random() * 100 + 'vw';           // posição horizontal aleatória
  cherry.style.animationDuration = (15 + Math.random() * 10) + 's'; // duração entre 15-25s
  cherry.style.animationDelay = (Math.random() * 20) + 's';         // delay aleatório

  fundo.appendChild(cherry);

  cherry.addEventListener('animationiteration', () => {
    const footerTop = footer.getBoundingClientRect().top;
    const cherryTop = cherry.getBoundingClientRect().top;

    if (cherryTop > footerTop) {
      cherry.style.display = 'none';
      setTimeout(() => {
        cherry.style.display = 'block';
      }, 1500);
    }
  });
}

for (let i = 0; i < quantidade; i++) {
  criarCereja();
}
