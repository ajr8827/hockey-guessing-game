const apiURL = "https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster";
let playerData = [];
let playerNames = [];
let correctPlayer = { name: "Daniel Sprong", image: "images/Player8.png", id: null };

// Fetch player data from NHL API
async function fetchPlayerData() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        data.teams.forEach(team => {
            team.roster.roster.forEach(player => {
                const playerObj = {
                    name: player.person.fullName,
                    image: `https://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`,
                    id: player.person.id
                };
                playerData.push(playerObj);
                playerNames.push(player.person.fullName);

                // Set correctPlayer id if it's Daniel Sprong
                if (player.person.fullName.toLowerCase() === "daniel sprong") {
                    correctPlayer.id = player.person.id;
                }
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
    playerNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        datalist.appendChild(option);
    });

    console.log("Player names loaded for autofill.");
}

// Fetch player data when the script loads
fetchPlayerData();





