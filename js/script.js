const players = ['Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4'];
let scores = [0, 0, 0, 0];
let currentRound = 0;
let currentPlayer = 0;
let predictions = [];
let cardsPlayed = [];

// Inicia el juego
function startGame() {
    displayPlayerInfo();
    displayScores();
}

// Muestra información de los jugadores
function displayPlayerInfo() {
    const playersInfo = document.getElementById('players-info');
    playersInfo.innerHTML = players.map((player, index) => {
        return `<div>${player}: <span id="prediction-${index}"></span> manos ganadas</div>`;
    }).join('');
}

// Muestra puntuaciones
function displayScores() {
    const scoresDiv = document.getElementById('scores');
    scoresDiv.innerHTML = players.map((player, index) => {
        return `<div>${player}: ${scores[index]}</div>`;
    }).join('');
}

// Envía la predicción
document.getElementById('submit-prediction').addEventListener('click', () => {
    const predictionInput = document.getElementById('prediction');
    const prediction = parseInt(predictionInput.value);
    if (!isNaN(prediction) && prediction >= 0 && prediction <= 7) {
        predictions[currentPlayer] = prediction;
        document.getElementById(`prediction-${currentPlayer}`).innerText = predictions[currentPlayer];
        currentPlayer++;
        
        // Si todos los jugadores han hecho su predicción
        if (currentPlayer >= players.length) {
            currentPlayer = 0;
            playRound();
        }
    } else {
        alert("Por favor, ingresa un número válido entre 0 y 7.");
    }
});

// Juega una ronda (lógica simple)
function playRound() {
    // Aquí puedes agregar la lógica para jugar una ronda
    // Por simplicidad, asumimos que todos ganan una mano
    for (let i = 0; i < players.length; i++) {
        scores[i] += predictions[i]; // Sumar predicciones (simuladas)
    }
    
    cardsPlayed.push(`Ronda ${currentRound + 1} completada`);
    document.getElementById('cards-played').innerText = cardsPlayed.join('\n');
    displayScores();
    currentRound++;
}

// Inicia el juego
startGame();
