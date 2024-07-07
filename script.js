const apiURL = "https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster";
let playerData = [];
let playerNames = [];

// Fetch player data from NHL API
async function fetchPlayerData() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        data.teams.forEach(team => {
            team.roster.roster.forEach(player => {
                playerData.push({
                    name: player.person.fullName,
                    image: `https://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`
                });
                playerNames.push(player.person.fullName);
            });
        });

        // Initialize the game after fetching player data
        setUpGame();
    } catch (error) {
        console.error("Error fetching player data: ", error);
    }
}

// Initialize the game
function setUpGame() {
    const playerIndex = getPlayerIndex();
    const correctPlayer = playerData[playerIndex];

    // Set the correct image based on the date
    document.getElementById('player-stats-image').src = correctPlayer.image;

    // For debugging purposes: print out the selected player and image
    console.log("Correct player: " + correctPlayer.name);
    console.log("Image path: " + correctPlayer.image);

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
                document.getElementById('player-stats-image').src = correctPlayer.image;
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
    playerNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        datalist.appendChild(option);
    });
}

// Function to get the index of the player based on the date
function getPlayerIndex() {
    const startDate = new Date("2024-01-01"); // Starting date
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays % playerData.length;
}

// Fetch player data when the script loads
fetchPlayerData();


