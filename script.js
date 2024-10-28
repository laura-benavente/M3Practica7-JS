function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let monedas = 50;
let resultados = [];

document.getElementById('startButton').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('betButton').style.display = 'inline-block';
    updateStatus();
});

document.getElementById('betButton').addEventListener('click', function() {
    let apuestaNumero = parseInt(prompt("Elige un número entre 1 y 6 para apostar:"));

    if (isNaN(apuestaNumero) || apuestaNumero < 1 || apuestaNumero > 6) {
        alert("Debes elegir un número entero entre 1 y 6.");
        return;
    }

    let cantidadApostada = parseInt(prompt("¿Cuántas monedas deseas apostar? (mínimo 1)"));

    if (isNaN(cantidadApostada) || cantidadApostada < 1 || cantidadApostada > monedas) {
        alert("Debes apostar una cantidad válida de monedas.");
        return;
    }

    let numeroAleatorio = getRandomInt(1, 7);
    resultados.push(numeroAleatorio);

    if (numeroAleatorio === apuestaNumero) {
        monedas += cantidadApostada; 
        alert(`¡Ganaste! Apostaste ${cantidadApostada} monedas. Tienes ahora ${monedas} monedas.`);
    } else {
        monedas -= cantidadApostada;
        alert(`Perdiste ${cantidadApostada} monedas. Ahora tienes ${monedas} monedas.`);
    }
    updateStatus();

    if (monedas <= 0) {
        alert("Game Over");
        mostrarResultados();
        resetGame();
    } else if (monedas >= 100) {
        alert("¡Enhorabuena! ¡Has ganado el juego!");
        mostrarResultados();
        resetGame();
    }
});

function updateStatus() {
    document.getElementById('status').textContent = `Tienes ${monedas} monedas.`;
}

function mostrarResultados() {
    alert("Resultados de los números aleatorios: " + resultados.join(", "));
}

function resetGame() {
    monedas = 50;
    resultados = [];
    updateStatus();
    document.getElementById('startButton').style.display = 'inline-block';
    document.getElementById('betButton').style.display = 'none';
}
