const questions = [
    { q: "What has to be broken before you can use it?", a: ["egg"] },
    { q: "I’m tall when I’m young, and I’m short when I’m old. What am I?", a: ["candle"] },
    { q: "What month of the year has 28 days?", a: ["all", "every month"] },
    { q: "What is full of holes but still holds water?", a: ["sponge"] },
    { q: "What gets wet while drying?", a: ["towel"] },
    { q: "What has a neck but no head?", a: ["bottle"] },
    { q: "What comes down but never goes up?", a: ["rain"] },
    { q: "I speak without a mouth and hear without ears. What am I?", a: ["echo"] },
    { q: "What has hands but can’t clap?", a: ["clock"] },
    { q: "What has many keys but can’t open a single lock?", a: ["piano"] },
    { q: "The more you take, the more you leave behind. What am I?", a: ["footsteps"] },
    { q: "What is always in front of you but can’t be seen?", a: ["future"] },
    { q: "There’s a one-story house where everything is yellow. What color are the stairs?", a: ["no stairs"] },
    { q: "What can you break, even if you never pick it up or touch it?", a: ["promise"] },
    { q: "What goes up but never comes down?", a: ["age"] },
    { q: "A man who was outside in the rain without an umbrella didn’t get a single hair on his head wet. Why?", a: ["bald"] },
    { q: "What can you keep after giving to someone?", a: ["word"] },
    { q: "What has a head, a tail, but no body?", a: ["coin"] },
    { q: "What can travel around the world while staying in a corner?", a: ["stamp"] },
    { q: "What has legs but doesn’t walk?", a: ["table"] },
    { q: "What has an eye but can’t see?", a: ["needle"] },
    { q: "What kind of room has no doors or windows?", a: ["mushroom"] },
    { q: "What is black when it’s clean and white when it’s dirty?", a: ["chalkboard"] },
    { q: "What has words but never speaks?", a: ["book"] },
    { q: "What begins with T, ends with T, and has T in it?", a: ["teapot"] },
    { q: "What has a face and two hands but no arms or legs?", a: ["clock"] },
    { q: "What has four wheels and flies?", a: ["garbage truck"] },
    { q: "What has a bottom at the top?", a: ["leg"] },
    { q: "What can run but never walks, has a bed but never sleeps?", a: ["river"] },
    { q: "What has roots as nobody sees, is taller than trees?", a: ["mountain"] },
    { q: "What comes once in a minute, twice in a moment, but never in a thousand years?", a: ["m"] },
    { q: "What is always coming but never arrives?", a: ["tomorrow"] },
    { q: "What flies without wings?", a: ["time"] },
    { q: "What can be cracked, made, told, and played?", a: ["joke"] },
    { q: "What has 13 hearts but no other organs?", a: ["deck of cards"] },
    { q: "What has teeth but can’t bite?", a: ["comb"] },
    { q: "What is easy to lift but hard to throw?", a: ["feather"] },
    { q: "What can’t be put in a saucepan?", a: ["lid"] },
    { q: "What kind of band never plays music?", a: ["rubber band"] },
    { q: "What has cities but no houses?", a: ["map"] },
    { q: "What has oceans but no water?", a: ["map"] },
    { q: "What has mountains but no rocks?", a: ["map"] },
    { q: "What gets bigger the more you take away?", a: ["hole"] },
    { q: "What goes through towns and over hills but never moves?", a: ["road"] },
    { q: "What can you hold without touching it?", a: ["breath"] },
    { q: "What comes at the end of everything?", a: ["g"] }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let totalQuestions = 0;
let correctAnswers = 0;

function startGame() {
    const num = parseInt(document.getElementById('numQuestions').value);

    if (num >= 5 && num <= 50 && num % 5 === 0) {
        selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, num);
        totalQuestions = num;
        currentQuestionIndex = 0;
        correctAnswers = 0;

        document.getElementById('startPage').style.display = 'none';
        document.getElementById('gamePage').style.display = 'block';

        showQuestion();
    } else {
        alert("Please choose a number between 5 and 50 in increments of 5.");
    }
}

function showQuestion() {
    document.getElementById('answerInput').value = '';
    document.getElementById('questionArea').textContent = selectedQuestions[currentQuestionIndex].q;
    document.getElementById('feedback').textContent = '';

    // Show submit button, hide next button
    document.getElementById('submitButton').style.display = 'inline';
    document.getElementById('nextButton').style.display = 'none';
}

function submitAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim().toLowerCase();
    const correctAnswersList = selectedQuestions[currentQuestionIndex].a;
    const feedback = document.getElementById('feedback');

    if (correctAnswersList.includes(userAnswer)) {
        feedback.innerHTML = "✅ Correct!";
        correctAnswers++;
    } else {
        feedback.innerHTML = `❌ Incorrect! The correct answer was: <b>${correctAnswersList[0]}</b>`;
    }

    // Hide submit button, show next button
    document.getElementById('submitButton').style.display = 'none';
    document.getElementById('nextButton').style.display = 'inline';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        showQuestion();
    } else {
        document.getElementById('gamePage').style.display = 'none';
        document.getElementById('endPage').style.display = 'block';
        document.getElementById('finalScore').textContent = `You answered ${correctAnswers} out of ${totalQuestions} correctly!`;
    }
}

function restartGame() {
    document.getElementById('endPage').style.display = 'none';
    document.getElementById('startPage').style.display = 'block';
}
