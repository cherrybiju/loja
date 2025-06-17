const hero = document.getElementById('hero');
const quantidadeCerejas = 20;

for (let i = 0; i < quantidadeCerejas; i++) {
    const cereja = document.createElement('div');
    cereja.classList.add('cereja');

    cereja.style.left = Math.random() * 100 + '%';
    cereja.style.animationDuration = (4 + Math.random() * 6) + 's';
    cereja.style.animationDelay = (Math.random() * 8) + 's';

    hero.appendChild(cereja);
}
