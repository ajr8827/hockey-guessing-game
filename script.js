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
    "Daniel Sprong" // Include Daniel Sprong for testing purposes
    // Add more players as needed
];

let correctPlayer = { name: "Daniel Sprong", image: "images/Player8.png", id: null };

// Initialize the game
function setUpGame() {
    // Set the correct stats image for Daniel Sprong
    document.getElementById('player-stats-image').src = correctPlayer.image;

    // For debugging purposes: print out the selected player and image
    console.log("Correct player: " + correctPlayer.name);
    console.log("Stats Image path: " + correctPlayer.image);

    let guesses = 0;
    const maxGuesses = 3;

    document.getElementById('submit-guess').addEventListener('click', function () {
        if (guesses < maxGuesses) {
            let guess = document.getElementById('guess-input').value.toLowerCase().trim();
            guesses++;
            document.getElementById('guess-count').innerText = `Guesses: ${guesses}/${maxGuesses}`;

            console.log("User guess: " + guess);
            console.log("Correct answer: " + correctPlayer.name.toLowerCase().trim());

            if (guess === correctPlayer.name.toLowerCase().trim()) {
                document.getElementById('feedback').innerText = `Correct! The player is ${correctPlayer.name}.`;
                document.getElementById('feedback').style.color = "green";
                // Show the correct player image
                document.getElementById('player-stats-image').src = `https://nhl.bamcontent.com/images/headshots/current/168x168/${correctPlayer.id}.jpg`;
            } else {
                document.getElementById('feedback').innerText = "Incorrect. Try again!";
                document.getElementById('feedback').style.color = "red";
                if (guesses === maxGuesses) {
                    document.getElementById('feedback').innerText = `Out of guesses! The correct player was ${correctPlayer.name}.`;
                }
            }
        }
    });

    // Autofill player names
    const datalist = document.getElementById('player-suggestions');
    playerList.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        datalist.appendChild(option);
    });

    console.log("Player names loaded for autofill.");
}

// Initialize the game setup
setUpGame();
