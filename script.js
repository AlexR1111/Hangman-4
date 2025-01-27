const words = ['abstraction', 'deterjan', 'stuhlgang', 'evileren'];
let randomWord;
let guessedWord;
let attemptsLeft;
let guessedLetters;

function neuesSpiel() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = randomWord.split('').map(() => '_');
    attemptsLeft = 5;
    guessedLetters = [];
    updateAnzeige();
}

function updateAnzeige() {
    document.getElementById("wort").textContent = guessedWord.join(' ');
    document.getElementById("versuche").textContent = `Verbleibende Versuche: ${attemptsLeft}`;
}

function rateBuchstabe() {
    const buchstabe = document.getElementById("buchstabe").value.toLowerCase();
    document.getElementById("buchstabe").value = '';

    if (guessedLetters.includes(buchstabe)) {
        alert('Du hast diesen Buchstaben schon geraten!');
        return;
    }

    guessedLetters.push(buchstabe);

    if (randomWord.includes(buchstabe)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === buchstabe) {
                guessedWord[i] = buchstabe;
            }
        }
    } else {
        attemptsLeft--;
    }

    updateAnzeige();

    if (!guessedWord.includes('_')) {
        alert('Herzlichen Glückwunsch! Du hast das Wort erraten!');
    } else if (attemptsLeft <= 0) {
        alert(`Game Over! Das Wort war: ${randomWord}`);
    }
}

neuesSpiel();
