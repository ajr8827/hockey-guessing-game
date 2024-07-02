const correctPlayerName = "Steve Yzerman"; // Update with the correct player name from your new screenshot

document.getElementById('submit-guess').addEventListener('click', function() {
    let guess = document.getElementById('guess-input').value.toLowerCase().trim();
    console.log(`Guess: ${guess}, Correct: ${correctPlayerName.toLowerCase().trim()}`); // Debugging line
    
    if (guess === correctPlayerName.toLowerCase().trim()) {
        document.getElementById('feedback').innerText = `Correct! The player is ${correctPlayerName}.`;
        document.getElementById('feedback').style.color = "green";
    } else {
        document.getElementById('feedback').innerText = "Incorrect. Try again!";
        document.getElementById('feedback').style.color = "red";
    }
});
