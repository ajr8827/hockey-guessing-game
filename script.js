document.getElementById('submit-guess').addEventListener('click', function() {
    const guess = document.getElementById('guess-input').value.toLowerCase();
    const playerName = "steve yzerman"; // Example player name

    if (guess === playerName) {
        document.getElementById('feedback').innerText = "Correct! The player is Steve Yzerman.";
        document.getElementById('feedback').style.color = "green";
    } else {
        document.getElementById('feedback').innerText = "Incorrect. Try again!";
        document.getElementById('feedback').style.color = "red";
    }
});
