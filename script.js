const playerList = [
    "Connor McDavid", "Sidney Crosby", "Auston Matthews", "Nathan MacKinnon",
    "Alexander Ovechkin", "Leon Draisaitl", "David Pastrnak", "Mitch Marner",
    "Brad Marchand", "Patrick Kane", "Artemi Panarin", "Steven Stamkos",
    "Jonathan Huberdeau", "Johnny Gaudreau", "Jack Eichel", "Sebastian Aho",
    "Mark Scheifele", "Brayden Point", "Matthew Tkachuk", "Nikita Kucherov",
    "Roman Josi", "Victor Hedman", "Cale Makar", "Quinn Hughes",
    "Miro Heiskanen", "Adam Fox", "Charlie McAvoy", "John Carlson",
    "Alex Pietrangelo", "Kris Letang", "Dougie Hamilton", "Morgan Rielly",
    "Shea Theodore", "Devon Toews", "Ryan Pulock", "Jaccob Slavin",
    "Aaron Ekblad", "Seth Jones", "Zach Werenski", "Thomas Chabot",
    "Daniel Sprong", "Ryan Kesler", "Tyler Myers", "Conor Garland"
];

const playersToGuess = [
    { name: "Ryan Kesler", image: "images/Player9.png" },
    { name: "Tyler Myers", image: "images/Player10.png" },
    { name: "Conor Garland", image: "images/Player11.png" }
];

let currentPlayerIndex = 0;
let guesses = 0;
const maxGuesses = 3;

// Initialize the game
function setUpGame() {
    // Set the initial player stats image
    setPlayerImage();

    // Autofill player names
    const datalist = document.getElementById('player-suggestions');
    playerList.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        datalist.appendChild(option);
    });

    // Set up event listener for the submit button
    document.getElementById('submit-guess').addEventListener('click', handleGuess);

    console.log("Player names loaded for autofill.");
}

// Set the player image based on the current index
function setPlayerImage() {
    const player = playersToGuess[currentPlayerIndex];
    document.getElementById('player-stats-image').src = player.image;
    document.getElementById('player-stats-image').alt = `Player Stats Screenshot for ${player.name}`;
}

// Handle the user's guess
function handleGuess() {
    if (guesses < maxGuesses) {
        const guess = document.getElementById('guess-input').value.toLowerCase().trim();
        guesses++;
        document.getElementById('guess-count').innerText = `Guesses: ${guesses}/${maxGuesses}`;

        console.log("User guess: " + guess);
        console.log("Correct answer: " + playersToGuess[currentPlayerIndex].name.toLowerCase().trim());

        if (guess === playersToGuess[currentPlayerIndex].name.toLowerCase().trim()) {
            document.getElementById('feedback').innerText = `Correct! The player is ${playersToGuess[currentPlayerIndex].name}.`;
            document.getElementById('feedback').style.color = "green";
            currentPlayerIndex++;
            if (currentPlayerIndex < playersToGuess.length) {
                setPlayerImage();
                guesses = 0;
                document.getElementById('guess-count').innerText = `Guesses: ${guesses}/${maxGuesses}`;
                document.getElementById('feedback').innerText = '';
            } else {
                document.getElementById('congratulations').classList.remove('hidden');
                document.getElementById('guess-form').classList.add('hidden');
            }
        } else {
            document.getElementById('feedback').innerText = "Incorrect. Try again!";
            document.getElementById('feedback').style.color = "red";
            showFeedbackAnimation("X");
            if (guesses === maxGuesses) {
                document.getElementById('feedback').innerText = `Out of guesses! The correct player was ${playersToGuess[currentPlayerIndex].name}. Try again!`;
                guesses = 0;
            }
        }
    }
}

// Show feedback animation
function showFeedbackAnimation(symbol) {
    const feedbackAnimation = document.getElementById('feedback-animation');
    feedbackAnimation.innerText = symbol;
    feedbackAnimation.classList.remove('hidden');
    setTimeout(() => {
        feedbackAnimation.classList.add('hidden');
    }, 1000);
}

// Initialize the game setup
setUpGame();
