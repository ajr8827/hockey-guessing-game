// Replace 'Steve Yzerman' with the actual player name for the new screenshot
const correctPlayerName = "Steve Yzerman"; 

document.getElementById('submit-guess').addEventListener('click', function() {
    const guess = document.getElementById('guess-input').value.toLowerCase();
    
    if (guess === correctPlayerName.toLowerCase()) {
        document.getElementById('feedback').innerText = `Correct! The player is ${correctPlayerName}.`;
        document.getElementById('feedback').style.color = "green";
    } else {
        document.getElementById('feedback').innerText = "Incorrect. Try again!";
        document.getElementById('feedback').style.color = "red";
    }
});
