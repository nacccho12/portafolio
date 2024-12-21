const worldElement = document.querySelector('.world');

const words = ['Mundo', 'World', 'Monde', 'Welt', 'العالم', 'Mondo', 'Człowiek'];

let index = 0;

function changeWorld() {
    worldElement.textContent = words[index];
    index = (index + 1) % words.length;
}

setInterval(changeWorld, 2000);
