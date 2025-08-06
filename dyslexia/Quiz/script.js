const allQuestions = [
    { question: "Which word rhymes with 'cat'?", options: ["dog", "hat", "bird", "fish"], correctAnswer: 1 },
    { question: "How many syllables are in the word 'banana'?", options: ["one", "two", "three", "four"], correctAnswer: 2 },
    { question: "Which letter is often confused with 'b'?", options: ["c", "d", "p", "q"], correctAnswer: 1 },
    { question: "Which word means the opposite of 'big'?", options: ["large", "huge", "small", "tall"], correctAnswer: 2 },
    { question: "Spell the word that means a place to read books.", options: ["libary", "librery", "library", "libarry"], correctAnswer: 2 },
    { question: "Which word is a homophone for 'to'?", options: ["too", "two", "both", "from"], correctAnswer: 0 },
    { question: "What sound does 'sh' make?", options: ["s", "h", "sh", "ch"], correctAnswer: 2 },
    { question: "Which word is spelled correctly?", options: ["recieve", "receive", "recieve", "receve"], correctAnswer: 1 },
    { question: "If you 'walk' somewhere, what is another word for it?", options: ["run", "stroll", "jump", "crawl"], correctAnswer: 1 },
    { question: "Which word has a silent 'k'?", options: ["kite", "king", "know", "kick"], correctAnswer: 2 },
    { question: "What is the first sound in 'apple'?", options: ["p", "a", "l", "e"], correctAnswer: 1 },
    { question: "Which word means 'very happy'?", options: ["sad", "angry", "joyful", "tired"], correctAnswer: 2 },
    { question: "Which word is a homophone for 'there'?", options: ["their", "they're", "here", "both a and b"], correctAnswer: 3 },
    { question: "How many syllables are in 'computer'?", options: ["one", "two", "three", "four"], correctAnswer: 2 },
    { question: "Which word is often confused with 'p'?", options: ["b", "q", "d", "g"], correctAnswer: 1 },
    { question: "Spell the word that means a place where a king or queen lives.", options: ["palace", "palase", "palis", "pallace"], correctAnswer: 0 },
    { question: "Which word rhymes with 'tree'?", options: ["car", "bee", "book", "sun"], correctAnswer: 1 },
    { question: "What is the last sound in 'dog'?", options: ["d", "o", "g", "do"], correctAnswer: 2 },
    { question: "Which word means 'to begin'?", options: ["end", "stop", "start", "finish"], correctAnswer: 2 },
    { question: "Which word is spelled correctly?", options: ["beleive", "believe", "belive", "beleeve"], correctAnswer: 1 },
    { question: "Which word is a homophone for 'son'?", options: ["sun", "daughter", "moon", "star"], correctAnswer: 0 },
    { question: "How many syllables are in 'elephant'?", options: ["one", "two", "three", "four"], correctAnswer: 2 },
    { question: "Which letter is often confused with 'd'?", options: ["b", "c", "e", "f"], correctAnswer: 0 },
    { question: "Which word means the opposite of 'hot'?", options: ["warm", "cold", "fire", "sunny"], correctAnswer: 1 },
    { question: "Spell the word that means a small, flying insect.", options: ["fly", "fli", "fliy", "flei"], correctAnswer: 0 },
    { question: "Which word has a silent 'w'?", options: ["walk", "write", "wash", "wave"], correctAnswer: 1 },
    { question: "What is the first sound in 'bird'?", options: ["i", "b", "d", "r"], correctAnswer: 1 },
    { question: "Which word means 'to run quickly'?", options: ["jog", "sprint", "walk", "crawl"], correctAnswer: 1 },
    { question: "Which word is spelled correctly?", options: ["friend", "freind", "frend", "friened"], correctAnswer: 0 },
    { question: "Which word is a homophone for 'sea'?", options: ["see", "ocean", "river", "lake"], correctAnswer: 0 },
    { question: "How many syllables are in 'umbrella'?", options: ["two", "three", "four", "five"], correctAnswer: 2 },
    { question: "Which word is often confused with 'q'?", options: ["p", "g", "o", "c"], correctAnswer: 0 },
    { question: "Which word means the opposite of 'fast'?", options: ["quick", "slow", "rapid", "speedy"], correctAnswer: 1 },
    { question: "Spell the word that means a large, wild cat.", options: ["tigar", "tyger", "tiger", "tigre"], correctAnswer: 2 },
    { question: "Which word has a silent 'h'?", options: ["house", "happy", "hour", "hand"], correctAnswer: 2 },
    { question: "What is the last sound in 'cup'?", options: ["c", "u", "p", "cu"], correctAnswer: 2 },
    { question: "Which word means 'to talk'?", options: ["whisper", "shout", "speak", "listen"], correctAnswer: 2 },
    { question: "Which word is spelled correctly?", options: ["neccessary", "necessary", "necesary", "necessery"], correctAnswer: 1 },
    { question: "Which word is a homophone for 'hear'?", options: ["here", "listen", "sound", "ear"], correctAnswer: 0 },
    { question: "How many syllables are in 'bicycle'?", options: ["one", "two", "three", "four"], correctAnswer: 2 },
    { question: "Which letter is often confused with 's'?", options: ["z", "c", "x", "f"], correctAnswer: 0 },
    { question: "Which word means the opposite of 'up'?", options: ["down", "over", "under", "above"], correctAnswer: 0 },
    { question: "Spell the word that means a place where trains stop.", options: ["station", "stasion", "staiton", "staytion"], correctAnswer: 0 },
    { question: "Which word has a silent 'g'?", options: ["go", "game", "gnome", "glad"], correctAnswer: 2 },
    { question: "What is the first sound in 'dog'?", options: ["o", "d", "g", "do"], correctAnswer: 1 },
    { question: "Which word means 'to look at something closely'?", options: ["glance", "stare", "peek", "observe"], correctAnswer: 3 },
    { question: "Which word is spelled correctly?", options: ["seperate", "separate", "seprate", "separte"], correctAnswer: 1 },
    { question: "Which word is a homophone for 'write'?", options: ["right", "read", "wrong", "letter"], correctAnswer: 0 },
    { question: "How many syllables are in 'television'?", options: ["three", "four", "five", "six"], correctAnswer: 2 },
    { question: "Which word is often confused with 'm'?", options: ["n", "w", "v", "u"], correctAnswer: 1 },
    { question: "Which word means the opposite of 'happy'?", options: ["joyful", "sad", "excited", "glad"], correctAnswer: 1 },
    { question: "Spell the word that means a small, round fruit.", options: ["berry", "bery", "berri", "barry"], correctAnswer: 0 },
    { question: "Which word has a silent 'b'?", options: ["ball", "book", "bomb", "baby"], correctAnswer: 2 },
    { question: "What is the last sound in 'cat'?", options: ["a", "t", "c", "at"], correctAnswer: 1 },
    { question: "Which word means 'to choose'?", options: ["reject", "select", "ignore", "avoid"], correctAnswer: 1 },
    { question: "Which word is spelled correctly?", options: ["definately", "definitely", "definitly", "definetly"], correctAnswer: 1 },
    { question: "Which word is a homophone for 'flour'?", options: ["flower", "bread", "water", "sugar"], correctAnswer: 0 },
    { question: "How many syllables are in 'chocolate'?", options: ["one", "two", "three", "four"], correctAnswer: 1 },
    { question: "Which letter is often confused with 'u'?", options: ["v", "n", "m", "w"], correctAnswer: 1 },
    { question: "Which word means the opposite of 'day'?", options: ["morning", "night", "sun", "light"], correctAnswer: 1 },
    { question: "Spell the word that means a person who drives a car.", options: ["driver", "drivver", "drivr", "driber"], correctAnswer: 0 },
    { question: "Which word has a silent 'l'?", options: ["light", "love", "talk", "loud"], correctAnswer: 2 },
    { question: "What is the first sound in 'sun'?", options: ["u", "s", "n", "su"], correctAnswer: 1 },
    { question: "Which word means 'to build'?", options: ["destroy", "create", "break", "ruin"], correctAnswer: 1 },
    { question: "Which word is spelled correctly?", options: ["occassion", "occasion", "ocassion", "occassion"], correctAnswer: 1 },
    { question: "Which word is a homophone for 'new'?", options: ["knew", "old", "fresh", "used"], correctAnswer: 0 },
    { question: "How many syllables are in 'computer'?", options: ["one", "two", "three", "four"], correctAnswer: 2 },
    { question: "Which word is often confused with 'E'?", options: ["F", "3", "I", "L"], correctAnswer: 1 },
    { question: "Which word means the opposite of 'inside'?", options: ["in", "out", "middle", "center"], correctAnswer: 1 },
    { question: "Spell the word that means a place where students learn.", options: ["school", "scool", "skool", "scholl"], correctAnswer: 0 },
    { question: "Which word has a silent 't'?", options: ["top", "tree", "listen", "table"], correctAnswer: 2 },
    { question: "What is the last sound in 'pen'?", options: ["p", "e", "n", "pe"], correctAnswer: 2 },
    { question: "Which word means 'to run'?", options: ["walk", "jog", "sprint", "dash"], correctAnswer: 0 },
    { question: "Which word is spelled correctly?", options: ["goverment", "government", "governmant", "govermentt"], correctAnswer: 1 },
    { question: "Which word is a homophone for 'pair'?", options: ["pear", "apple", "group", "single"], correctAnswer: 0 },
    { question: "How many syllables are in 'beautiful'?", options: ["two", "three", "four", "five"], correctAnswer: 2 },
    { question: "Which word is often confused with 'V'?", options: ["U", "W", "A", "N"], correctAnswer: 1 },
    { question: "Which word means the opposite of 'light'?", options: ["bright", "dark", "heavy", "shine"], correctAnswer: 1 },
    { question: "Spell the word that means a small, furry animal that eats nuts.", options: ["squerrel", "squirrel", "squrrel", "squirl"], correctAnswer: 1 },
    { question: "Which word has a silent 'k'?", options: ["knife", "kick", "kite", "king"], correctAnswer: 0 },
    { question: "What is the first sound in 'fish'?", options: ["i", "f", "s", "h"], correctAnswer: 1 },
    { question: "Which word means 'to jump'?", options: ["hop", "skip", "leap", "fall"], correctAnswer: 2 },
    { question: "Which word is spelled correctly?", options: ["tomorrow", "tommorow", "tomarrow", "tomorow"], correctAnswer: 0 },
    { question: "Which word is a homophone for 'ate'?", options: ["eight", "eat", "food", "hungry"], correctAnswer: 0 },
    { question: "How many syllables are in 'dinosaur'?", options: ["two", "three", "four", "five"], correctAnswer: 2 },
    { question: "Which letter is often confused with 'Z'?", options: ["S", "N", "X", "L"], correctAnswer: 0 },
    { question: "Which word means the opposite of 'soft'?", options: ["gentle", "smooth", "hard", "fluffy"], correctAnswer: 2 },
    { question: "Spell the word that means a large, tall building.", options: ["skycraper", "skyscraper", "skycrapr", "skyscrapper"], correctAnswer: 1 },
    { question: "Which word has a silent 'p'?", options: ["pen", "pencil", "pneumonia", "paper"], correctAnswer: 2 },
    { question: "What is the last sound in 'book'?", options: ["b", "o", "k", "oo"], correctAnswer: 2 },
    { question: "Which word means 'to give'?", options: ["take", "receive", "offer", "keep"], correctAnswer: 2 },
    { question: "Which word is spelled correctly?", options: ["calendar", "calender", "calandar", "calander"], correctAnswer: 0 },
    { question: "Which word is a homophone for 'know'?", options: ["no", "yes", "understand", "learn"], correctAnswer: 0 },
    { question: "How many syllables are in 'hospital'?", options: ["two", "three", "four", "five"], correctAnswer: 2 },
    { question: "Which word is often confused with 'C'?", options: ["G", "O", "E", "S"], correctAnswer: 1 },
    { question: "Which word means the opposite of 'empty'?", options: ["vacant", "full", "hollow", "clear"], correctAnswer: 1 },
    { question: "Spell the word that means a place where you sleep.", options: ["bedroom", "bedrom", "bedroo", "bedrum"], correctAnswer: 0 },
    { question: "Which word has a silent 'l'?", options: ["cold", "walk", "loud", "light"], correctAnswer: 1 },
    { question: "What is the first sound in 'train'?", options: ["r", "t", "a", "tr"], correctAnswer: 3 },
    { question: "Which word means 'to run'?", options: ["walk", "jog", "sprint", "dash"], correctAnswer: 2 },
    { question: "Which word is spelled correctly?", options: ["restaurant", "restaraunt", "resturant", "restraunt"], correctAnswer: 0 },
    { question: "Which word is a homophone for 'one'?", options: ["won", "two", "single", "number"], correctAnswer: 0 },
    { question: "How many syllables are in 'information'?", options: ["three", "four", "five", "six"], correctAnswer: 3 },
    { question: "Which letter is often confused with 'N'?", options: ["M", "H", "K", "Z"], correctAnswer: 0 },
    { question: "Which word means the opposite of 'difficult'?", options: ["hard", "easy", "complex", "challenging"], correctAnswer: 1 },
    { question: "Spell the word that means a small, round, sweet cake.", options: ["cookie", "cooky", "cokie", "cookee"], correctAnswer: 0 },
    { question: "Which word has a silent 'h'?", options: ["hour", "house", "happy", "hand"], correctAnswer: 0 }
];

const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton');
const quizDisplay = document.getElementById('quiz-display');
const resultDisplay = document.getElementById('result-display');
const scoreText = document.getElementById('score-text');
const restartButton = document.getElementById('restartButton');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progressBar');

const body = document.body;
const settingsToggleBtn = document.getElementById('settings-toggle');
const settingsPanel = document.getElementById('settings-panel');
const closeSettingsBtn = document.getElementById('close-settings-btn');

const fontFamilySelect = document.getElementById('font-family-select');
const fontSizeSlider = document.getElementById('font-size-slider');
const fontSizeValue = document.getElementById('font-size-value');
const lineHeightSlider = document.getElementById('line-height-slider');
const lineHeightValue = document.getElementById('line-height-value');
const letterSpacingSlider = document.getElementById('letter-spacing-slider');
const letterSpacingValue = document.getElementById('letter-spacing-value');

const normalThemeBtn = document.getElementById('normal-theme-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');
const highContrastBtn = document.getElementById('high-contrast-btn');

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswerIndex = null;
let userAnswers = new Array(allQuestions.length).fill(null);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    shuffledQuestions = shuffleArray([...allQuestions]);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(shuffledQuestions.length).fill(null);

    quizDisplay.classList.remove('hidden');
    resultDisplay.classList.add('hidden');
    loadQuestion();
    updateNavigationButtons();
    updateProgressBar();
}

function loadQuestion() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button', 'w-full');
        button.setAttribute('data-index', index);
        button.addEventListener('click', () => selectAnswer(index));

        if (userAnswers[currentQuestionIndex] !== null && userAnswers[currentQuestionIndex].selected === index) {
            button.classList.add('selected');
        }
        optionsElement.appendChild(button);
    });

    selectedAnswerIndex = null;
    submitButton.disabled = userAnswers[currentQuestionIndex] === null;

    updateQuestionCounter();
    updateProgressBar();
    updateNavigationButtons();
    clearAnswerFeedback();
}

function selectAnswer(index) {
    selectedAnswerIndex = index;
    const optionButtons = optionsElement.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.classList.remove('selected');
        button.classList.remove('correct', 'incorrect');
    });
    optionButtons[index].classList.add('selected');
    submitButton.disabled = false;
}

function checkAnswer() {
    if (selectedAnswerIndex === null) {
        return;
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = (selectedAnswerIndex === currentQuestion.correctAnswer);

    userAnswers[currentQuestionIndex] = {
        selected: selectedAnswerIndex,
        isCorrect: isCorrect
    };

    const optionButtons = optionsElement.querySelectorAll('.option-button');
    optionButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === currentQuestion.correctAnswer) {
            button.classList.add('correct');
        }
        if (index === selectedAnswerIndex && !isCorrect) {
            button.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        score++;
    }
    submitButton.disabled = true;
    nextButton.disabled = false;
}

function clearAnswerFeedback() {
    const optionButtons = optionsElement.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.classList.remove('correct', 'incorrect', 'selected');
        button.disabled = false;
    });
}

function updateQuestionCounter() {
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function updateNavigationButtons() {
    nextButton.disabled = (userAnswers[currentQuestionIndex] === null) && (currentQuestionIndex < shuffledQuestions.length - 1);

    if (currentQuestionIndex === shuffledQuestions.length - 1) {
        nextButton.textContent = 'Finish Quiz';
    } else {
        nextButton.textContent = 'Next';
    }
}

function goToNextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizDisplay.classList.add('hidden');
    resultDisplay.classList.remove('hidden');
    scoreText.textContent = `Your score: ${score} / ${shuffledQuestions.length}`;
}

function applyDyslexiaSettings() {
    const selectedFont = fontFamilySelect.value;
    if (selectedFont === 'OpenDyslexic') {
        body.classList.add('dyslexia-font-opendyslexic');
        body.style.fontFamily = "'OpenDyslexic', sans-serif";
    } else {
        body.classList.remove('dyslexia-font-opendyslexic');
        body.style.fontFamily = `'${selectedFont}', sans-serif`;
    }

    const fontSize = fontSizeSlider.value + 'px';
    body.style.fontSize = fontSize;
    fontSizeValue.textContent = fontSize;

    const lineHeight = lineHeightSlider.value;
    body.style.lineHeight = lineHeight;
    lineHeightValue.textContent = lineHeight;

    const letterSpacing = letterSpacingSlider.value + 'em';
    body.style.letterSpacing = letterSpacing;
    letterSpacingValue.textContent = letterSpacing;

    localStorage.setItem('dyslexiaQuizSettings', JSON.stringify({
        fontFamily: fontFamilySelect.value,
        fontSize: fontSizeSlider.value,
        lineHeight: lineHeightSlider.value,
        letterSpacing: letterSpacingSlider.value,
        theme: body.dataset.theme
    }));
}

function setTheme(themeName) {
    body.classList.remove('dark-mode', 'high-contrast');
    body.dataset.theme = themeName;

    if (themeName === 'dark') {
        body.classList.add('dark-mode');
    } else if (themeName === 'high-contrast') {
        body.classList.add('high-contrast');
    }

    applyDyslexiaSettings();
}

function loadSavedSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('dyslexiaQuizSettings'));
    if (savedSettings) {
        fontFamilySelect.value = savedSettings.fontFamily || 'Inter';
        fontSizeSlider.value = savedSettings.fontSize || 16;
        lineHeightSlider.value = savedSettings.lineHeight || 1.8;
        letterSpacingSlider.value = savedSettings.letterSpacing || 0.05;
        setTheme(savedSettings.theme || 'normal');
    }
    applyDyslexiaSettings();
}

submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', goToNextQuestion);
restartButton.addEventListener('click', startQuiz);

settingsToggleBtn.addEventListener('click', () => {
    settingsPanel.classList.toggle('open');
});

closeSettingsBtn.addEventListener('click', () => {
    settingsPanel.classList.remove('open');
});

fontFamilySelect.addEventListener('change', applyDyslexiaSettings);
fontSizeSlider.addEventListener('input', applyDyslexiaSettings);
lineHeightSlider.addEventListener('input', applyDyslexiaSettings);
letterSpacingSlider.addEventListener('input', applyDyslexiaSettings);

normalThemeBtn.addEventListener('click', () => setTheme('normal'));
darkModeBtn.addEventListener('click', () => setTheme('dark'));
highContrastBtn.addEventListener('click', () => setTheme('high-contrast'));

window.onload = () => {
    loadSavedSettings();
    startQuiz();
};
