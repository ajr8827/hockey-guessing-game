// Replace example player name with actual player name associated with the screenshot
const correctPlayerName = "Alex Nylander"; 

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
