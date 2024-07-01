const players = [
    "Alex Nylander",
    "Mario Lemieux",
    "Steve Yzerman",
    "Sidney Crosby",
    "Alex Ovechkin",
    // Add all other player names here
];

// Autofill functionality
const guessInput = document.getElementById('guess-input');
guessInput.addEventListener('input', function() {
    const input = guessInput.value.toLowerCase();
    const suggestions = players.filter(player => player.toLowerCase().includes(input));
    // Display suggestions (this is a basic example, improve as needed)
    const datalist = document.getElementById('player-suggestions');
    datalist.innerHTML = '';
    suggestions.forEach(suggestion => {
        const option = document.createElement('option');
        option.value = suggestion;
        datalist.appendChild(option);
    });
});
