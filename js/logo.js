const textDisplay = document.getElementById('words');
const phrases = ['Celestial Mountains ', 'Untouched Nature ', 'Thousand Lakes '];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isOver = false;

function loop() {
    isOver = false;
    textDisplay.innerHTML = currentPhrase.join('');

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
        }

        if (j == phrases[i].length) {
            isOver = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i == phrases.length) {
                i = 0;
            }
        }
    }
    const fast = Math.random() * (100 - 50) + 50;
    const normal = Math.random() * (200 - 100) + 100;
    const time = isOver ? 1000 : isDeleting ? fast : normal;
    setTimeout(loop, time);
}
loop();