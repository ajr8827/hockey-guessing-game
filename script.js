// Array of player data for the week
const playerData = [
    { name: "Braden Schneider", image: "images/player1.png" },
    { name: "Morgan Geekie", image: "images/player2.png" },
    { name: "Connor McMichael", image: "images/player3.png" },
    { name: "Mike Amadio", image: "images/player4.png" },
    { name: "David Kampf", image: "images/player5.png" },
    { name: "Lawson Crouse", image: "images/player6.png" },
    { name: "Kiefer Sherwood", image: "images/player7.png" }
];

// Function to get the index of the player based on the date
function getPlayerIndex() {
    const startDate = new Date("2024-04-07"); // Starting date
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays % playerData.length;
}

// Set the correct player data based on the date
const playerIndex = getPlayerIndex();
const correctPlayer = playerData[playerIndex];

// Set the correct image based on the date
document.getElementById('player-stats-image').src = correctPlayer.image;

let guesses = 0;
const maxGuesses = 3;

document.getElementById('submit-guess').addEventListener('click', function () {
    if (guesses < maxGuesses) {
        let guess = document.getElementById('guess-input').value.toLowerCase().trim();
        guesses++;
        document.getElementById('guess-count').innerText = `Guesses: ${guesses}/${maxGuesses}`;

        if (guess === correctPlayer.name.toLowerCase().trim()) {
            document.getElementById('feedback').innerText = `Correct! The player is ${correctPlayer.name}.`;
            document.getElementById('feedback').style.color = "green";
        } else {
            document.getElementById('feedback').innerText = "Incorrect. Try again!";
            document.getElementById('feedback').style.color = "red";
            if (guesses === maxGuesses) {
                document.getElementById('feedback').innerText = `Out of guesses! The correct player was ${correctPlayer.name}.`;
            }
        }
    }
});
