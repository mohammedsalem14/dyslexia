// DOM Elements
const mainMenu = document.getElementById('main-menu');
const gameScreen = document.getElementById('game-screen');
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score-display');
const timeDisplay = document.getElementById('time-display');
const messageBox = document.getElementById('messageBox');
const backdrop = document.getElementById('backdrop');
const messageBoxTitle = document.getElementById('messageBoxTitle');
const messageBoxBody = document.getElementById('messageBoxBody');
const closeMessageBoxBtn = document.getElementById('closeMessageBoxBtn');

// State variables
let currentGameState = null;
let score = 0;
let gameActive = false;
let gameTime = 0;
let timeInterval = null;

// Game translations (simplified for this standalone version)
const translations = {
    'game1-title': 'Letter Typer',
    'game1-instructions': 'Letters will fall from the sky. Type the correct letter on your keyboard to clear it before it hits the bottom. The game ends when 10 letters are missed!',
    'game1-game-over': 'Game Over!',
    'game1-game-over-body': (score, time) => `You missed too many letters. Your final score is ${score} in ${time} seconds.`,
    'game2-title': 'Word Scramble',
    'game2-instructions': 'A scrambled word will appear. Type the correct word and press Enter to score points. Be quick!',
    'game2-correct': 'Correct!',
    'game2-correct-body': (word) => `You unscrambled the word "${word}". Great job!`,
    'game2-incorrect': 'Incorrect',
    'game2-incorrect-body': 'That\'s not the right word. Try again!',
    'game3-title': 'Memory Sequence',
    'game3-instructions': 'Watch a sequence of colored circles light up. Once it stops, click the circles in the correct order to score!',
    'game3-correct': 'Correct!',
    'game3-correct-body': 'You completed the sequence! A new, longer one will begin.',
    'game3-game-over': 'Game Over!',
    'game3-game-over-body': (score, time) => `Incorrect sequence. Your final score is ${score} in ${time} seconds.`,
    'score-label': 'Score',
    'time-label': 'Time',
    'ok-button': 'OK'
};

// Games Configuration
const gameConfigs = {
    'game1': {
        titleKey: 'game1-title',
        instructionsKey: 'game1-instructions',
        init: initGame1,
        update: updateGame1,
        draw: drawGame1,
        handleInput: handleInputGame1,
        gameOverTitleKey: 'game1-game-over',
        gameOverBodyKey: 'game1-game-over-body',
    },
    'game2': {
        titleKey: 'game2-title',
        instructionsKey: 'game2-instructions',
        init: initGame2,
        update: updateGame2,
        draw: drawGame2,
        handleInput: handleInputGame2,
    },
    'game3': {
        titleKey: 'game3-title',
        instructionsKey: 'game3-instructions',
        init: initGame3,
        update: updateGame3,
        draw: drawGame3,
        handleInput: handleInputGame3,
        gameOverTitleKey: 'game3-game-over',
        gameOverBodyKey: 'game3-game-over-body',
    }
};

// Function to show a custom message box
function showMessageBox(title, body) {
    messageBoxTitle.innerHTML = title;
    messageBoxBody.innerHTML = body;
    messageBox.style.display = 'flex';
    backdrop.style.display = 'block';
}

// Hides the custom message box
function hideMessageBox() {
    messageBox.style.display = 'none';
    backdrop.style.display = 'none';
}

// Resets game state and returns to main menu
function returnToMenu() {
    gameActive = false;
    clearInterval(timeInterval);
    gameScreen.style.display = 'none';
    canvas.style.display = 'none';
    mainMenu.style.display = 'flex';

    // Clean up event listeners
    window.removeEventListener('keydown', handleInputGame1);
    window.removeEventListener('keydown', handleInputGame2);
    canvas.removeEventListener('mousedown', handleInputGame3);

    currentGameState = null;
}

// Starts a new game
function startGame(gameName) {
    const config = gameConfigs[gameName];
    if (!config) return;

    mainMenu.style.display = 'none';
    gameScreen.style.display = 'flex';
    canvas.style.display = 'block';

    score = 0;
    gameTime = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    timeDisplay.textContent = `Time: ${gameTime}`;
    resizeCanvas();

    currentGameState = {
        ...config,
        state: config.init()
    };

    const title = translations[config.titleKey];
    const instructions = translations[config.instructionsKey];
    showMessageBox(title, instructions);

    closeMessageBoxBtn.onclick = () => {
        hideMessageBox();
        gameActive = true;
        timeInterval = setInterval(() => {
            gameTime++;
            timeDisplay.textContent = `Time: ${gameTime}`;
        }, 1000);
        window.requestAnimationFrame(gameLoop);
    };

    // Add new event listeners for the specific game
    if (gameName === 'game1') {
        window.addEventListener('keydown', handleInputGame1);
    } else if (gameName === 'game2') {
        window.addEventListener('keydown', handleInputGame2);
    } else if (gameName === 'game3') {
        canvas.addEventListener('mousedown', handleInputGame3);
    }
}

// The main game loop
function gameLoop() {
    if (!gameActive) return;

    currentGameState.update();
    currentGameState.draw();

    window.requestAnimationFrame(gameLoop);
}

// --- Game 1: Letter Typer Logic ---
function initGame1() {
    return { letters: [], missedCount: 0, lastSpawnTime: 0, minSpawnInterval: 1000 };
}

function updateGame1() {
    const now = Date.now();
    if (now - currentGameState.state.lastSpawnTime > currentGameState.state.minSpawnInterval) {
        const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        const x = Math.random() * (canvas.width - 50);
        currentGameState.state.letters.push({ char: randomChar, x: x, y: 0, speed: 1 + (score / 100) });
        currentGameState.state.lastSpawnTime = now;
    }

    currentGameState.state.letters.forEach(letter => { letter.y += letter.speed; });

    currentGameState.state.letters = currentGameState.state.letters.filter(letter => {
        if (letter.y < canvas.height - 30) {
            return true;
        } else {
            currentGameState.state.missedCount++;
            return false;
        }
    });

    if (currentGameState.state.missedCount >= 10) {
        gameActive = false;
        clearInterval(timeInterval);
        const title = translations['game1-game-over'];
        const body = translations['game1-game-over-body'](score, gameTime);
        showMessageBox(title, body);
        closeMessageBoxBtn.onclick = returnToMenu;
    }
}

function drawGame1() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const fontSize = '32px';
    const fontFamily = 'OpenDyslexic, sans-serif';
    const letterSpacing = '0.03em';

    ctx.font = `${fontSize} ${fontFamily}`;
    ctx.letterSpacing = letterSpacing;
    ctx.fillStyle = '#ffffff';
    currentGameState.state.letters.forEach(letter => {
        ctx.fillText(letter.char, letter.x, letter.y);
    });

    ctx.font = '24px Arial';
    ctx.fillStyle = '#ff5555';
    ctx.letterSpacing = '0em';
    ctx.fillText(`Missed: ${currentGameState.state.missedCount}/10`, 10, 30);
}

function handleInputGame1(event) {
    if (!gameActive) return;
    const typedChar = event.key.toUpperCase();
    const foundIndex = currentGameState.state.letters.findIndex(letter => letter.char === typedChar);
    if (foundIndex !== -1) {
        currentGameState.state.letters.splice(foundIndex, 1);
        score += 10;
        scoreDisplay.textContent = `Score: ${score}`;
    }
}

// --- Game 2: Word Scramble Logic ---
const wordList = ['APPLE', 'BANANA', 'ORANGE', 'GRAPE', 'STRAWBERRY', 'MANGO', 'CHERRY'];
let currentWord = '';
let scrambledWord = '';
let inputString = '';

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function newWord() {
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    scrambledWord = shuffle(currentWord.split('')).join('');
    inputString = '';
}

function initGame2() {
    newWord();
    return {};
}

function updateGame2() {}

function drawGame2() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const fontSize = '72px';
    const fontFamily = 'OpenDyslexic, sans-serif';
    const letterSpacing = '0.03em';

    ctx.font = `${fontSize} ${fontFamily}`;
    ctx.letterSpacing = letterSpacing;
    ctx.textAlign = 'center';

    ctx.fillStyle = '#8356E2';
    ctx.fillText(scrambledWord, canvas.width / 2, canvas.height / 2 - 40);

    ctx.fillStyle = '#ffffff';
    ctx.fillText(inputString, canvas.width / 2, canvas.height / 2 + 40);

    ctx.textAlign = 'left';
}

function handleInputGame2(event) {
    if (!gameActive) return;
    const key = event.key;
    if (key.length === 1 && key.match(/[a-zA-Z]/)) {
        inputString += key.toUpperCase();
    } else if (key === 'Backspace') {
        inputString = inputString.slice(0, -1);
    } else if (key === 'Enter') {
        if (inputString === currentWord) {
            score += 50;
            scoreDisplay.textContent = `Score: ${score}`;
            const title = translations['game2-correct'];
            const body = translations['game2-correct-body'](currentWord);
            showMessageBox(title, body);
        } else {
            const title = translations['game2-incorrect'];
            const body = translations['game2-incorrect-body'];
            showMessageBox(title, body);
        }
        newWord();
        closeMessageBoxBtn.onclick = hideMessageBox;
    }
}

// --- Game 3: Memory Sequence Logic ---
const colors = ['#ff5252', '#ffd740', '#69f0ae', '#448aff'];
let sequence = [];
let playerSequence = [];
let isShowingSequence = false;
let showTimeout = null;

function addColorToSequence() {
    sequence.push(colors[Math.floor(Math.random() * colors.length)]);
    playerSequence = [];
    isShowingSequence = true;
    showSequence();
}

function showSequence() {
    let i = 0;
    function showNextColor() {
        if (i < sequence.length) {
            const color = sequence[i];
            drawGame3(color);
            i++;
            showTimeout = setTimeout(showNextColor, 1000);
        } else {
            isShowingSequence = false;
            drawGame3();
        }
    }
    showNextColor();
}

function initGame3() {
    sequence = [];
    addColorToSequence();
    return {};
}

function updateGame3() {}

function drawGame3(activeColor = null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const radius = 50;
    const xPositions = [canvas.width * 0.2, canvas.width * 0.4, canvas.width * 0.6, canvas.width * 0.8];
    const y = canvas.height / 2;

    for (let i = 0; i < colors.length; i++) {
        ctx.beginPath();
        ctx.arc(xPositions[i], y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = colors[i] === activeColor ? colors[i] : 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
        ctx.strokeStyle = colors[i];
        ctx.lineWidth = 5;
        ctx.stroke();
    }
}

function handleInputGame3(event) {
    if (!gameActive || isShowingSequence) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const radius = 50;
    const xPositions = [canvas.width * 0.2, canvas.width * 0.4, canvas.width * 0.6, canvas.width * 0.8];
    const y = canvas.height / 2;

    let clickedColorIndex = -1;
    for (let i = 0; i < xPositions.length; i++) {
        const dist = Math.sqrt((mouseX - xPositions[i]) ** 2 + (mouseY - y) ** 2);
        if (dist < radius) {
            clickedColorIndex = i;
            break;
        }
    }

    if (clickedColorIndex !== -1) {
        playerSequence.push(colors[clickedColorIndex]);
        if (playerSequence.length <= sequence.length) {
            if (playerSequence[playerSequence.length - 1] === sequence[playerSequence.length - 1]) {
                if (playerSequence.length === sequence.length) {
                    score += sequence.length * 10;
                    scoreDisplay.textContent = `Score: ${score}`;
                    const title = translations['game3-correct'];
                    const body = translations['game3-correct-body'];
                    showMessageBox(title, body);
                    closeMessageBoxBtn.onclick = () => {
                        hideMessageBox();
                        addColorToSequence();
                    };
                }
            } else {
                gameActive = false;
                clearInterval(timeInterval);
                const title = translations['game3-game-over'];
                const body = translations['game3-game-over-body'](score, gameTime);
                showMessageBox(title, body);
                closeMessageBoxBtn.onclick = returnToMenu;
            }
        }
    }
}

// --- Event Listeners ---
document.getElementById('startGame1Btn').addEventListener('click', () => startGame('game1'));
document.getElementById('startGame2Btn').addEventListener('click', () => startGame('game2'));
document.getElementById('startGame3Btn').addEventListener('click', () => startGame('game3'));
document.getElementById('returnToMenuBtn').addEventListener('click', returnToMenu);
closeMessageBoxBtn.addEventListener('click', hideMessageBox);

// Ensure canvas is resized on window resize for responsiveness
function resizeCanvas() {
    const container = document.getElementById('game-screen');
    if (container) {
        const newWidth = container.clientWidth * 0.9;
        canvas.width = newWidth > 800 ? 800 : newWidth;
        canvas.height = newWidth > 800 ? 400 : newWidth / 2;
    }
}

window.addEventListener('resize', resizeCanvas);
window.onload = resizeCanvas;
