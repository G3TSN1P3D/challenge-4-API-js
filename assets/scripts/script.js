// Declaring variables
let timeInterval;
let timeLeft = 75;
let cont = 0;
let x = 0;
let points = 0;
let score = [];
let startQuiz = document.querySelector(".start");
let leaderboard = document.querySelector(".leaderboard");
let highScore = document.querySelector(".high-scores");
let title = document.querySelector(".title");
let timer = document.querySelector(".timer");
let quizTitle = document.querySelector(".quiz-title");
let wQuestion = document.querySelector(".question");
let content = document.querySelector(".content");
let description = document.querySelector(".description");
let quizOptions = document.querySelector(".quiz-options");
let rightWrong = document.querySelector(".right-wrong");
let resultWritten = document.querySelector(".result-written");
let buttons = document.querySelector(".buttons");

// Create HTML elements
let h1Ques = document.createElement("h1");

let answ1 = document.createElement("button");
let answ2 = document.createElement("button");
let answ3 = document.createElement("button");
let answ4 = document.createElement("button");

let h2R = document.createElement("h2");
let h2W = document.createElement("h2");

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");

let nickname = document.createElement("input");
let label = document.createElement("label");
let submitbtn = document.createElement("button");
let h1 = document.createElement("h1");
let h2 = document.createElement("h2")

let ol = document.createElement("ol");
let li = document.createElement("li");

// Sets styles for elements
answ1.setAttribute("class", "answer-btn");
answ2.setAttribute("class", "answer-btn");
answ3.setAttribute("class", "answer-btn");
answ4.setAttribute("class", "answer-btn");
submitbtn.setAttribute("class", "submit");
nickname.setAttribute("class", "score-nick");

// Sets content in some elements
submitbtn.textContent = "Submit"
label.textContent = "Nickname: "
h2R.textContent = "Correct!";
h2W.textContent = "Incorrect!"

let Questions = [{
    question: "Commonly used data types DO NOT include: ",
    answers: [{
        answer: "Strings",
        correct: false
    },
    {
        answer: "Booleans",
        correct: false
    },
    {
        answer: "Alerts",
        correct: true
    },
    {
        answer: "Numbers",
        correct: false
    },
    ]
},
{
    question: "The condition in an if / else statement is enclosed with: ",
    answers: [{
        answer: "Quotes",
        correct: false
    },
    {
        answer: "Curly Brackets",
        correct: false
    },
    {
        answer: "Parenthesis",
        correct: true
    },
    {
        answer: "Square Brackets",
        correct: false
    },
    ]
},
{
    question: "Arrays in Javascript can be used to store: ",
    answers: [{
        answer: "Numbers and strings",
        correct: false
    },
    {
        answer: "Other arrays",
        correct: false
    },
    {
        answer: "Booleans",
        correct: false
    },
    {
        answer: "All of the above",
        correct: true
    },
    ]
},
{
    question: "String values must be enclosed within _______ when being assigned to variables.",
    answers: [{
        answer: "Commas",
        correct: false
    },
    {
        answer: "Curly Brackets",
        correct: false
    },
    {
        answer: "Quotes",
        correct: true
    },
    {
        answer: "Parenthesis",
        correct: false
    },
    ]
},
{
    question: "A very useful tool used during development and debugging for printing content to the debuger is: ",
    answers: [{
        answer: "Javascript",
        correct: false
    },
    {
        answer: "terminal/bash",
        correct: false
    },
    {
        answer: "for loops",
        correct: false
    },
    {
        answer: "console.log",
        correct: true
    },
    ]
},
]

// function to start the quiz
function StartTheQuiz() {
    timeLeft = 75;
    cont = 0;
    x = 0;
    points = 0;
    removeStart();
    countdown();
    generateQuestions();
    resultWritten.setAttribute("style", "visibility: visible")

}
function removeStart() {
    description.remove();
    quizTitle.remove();
    startQuiz.remove();
    highScore.remove();
    leaderboard.remove();
}
function generateQuestions() {
    h1Ques.textContent = Questions[cont].question;
    answ1.textContent = Questions[cont].answers[x].answer;
    answ2.textContent = Questions[cont].answers[x + 1].answer;
    answ3.textContent = Questions[cont].answers[x + 2].answer;
    answ4.textContent = Questions[cont].answers[x + 3].answer;

    wQuestion.appendChild(h1Ques);

    li1.appendChild(answ1);
    li2.appendChild(answ2);
    li3.appendChild(answ3);
    li4.appendChild(answ4);

    quizOptions.appendChild(li1);
    quizOptions.appendChild(li2);
    quizOptions.appendChild(li3);
    quizOptions.appendChild(li4);

}
function countdown() {
    document.querySelector("header").style.justifyContent="center";
    timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timer.textContent = `Timer: ${timeLeft}`;
            timeLeft--;
        } else {
            QuizEnd();
        }
    }, 1000);
}
function QuizEnd() {
    timer.textContent = '';
    clearInterval(timeInterval);
    ClearQues();
    SaveResults();
}
function ClearQues() {
    wQuestion.remove();
    quizOptions.remove();
    resultWritten.remove();
}
function SaveResults() {
    h1.textContent = "All Done!";
    h2.textContent = `Your final score is: ${points}.`;
    content.appendChild(h1);
    content.appendChild(h2);
    content.appendChild(label);
    content.appendChild(nickname);
    content.appendChild(submitbtn);
    submitbtn.addEventListener("click", function(event) {
        event.preventDefault();

        let nick = nickname.value;
        let pnts = points;

        localStorage.setItem(`${nick}`, JSON.stringify(nick));
        localStorage.setItem(`${nick}-points`, JSON.stringify(pnts));
        ResetGame();
    })
}
function ResetGame () {
    // Removes all content from previous quiz 
    document.location.reload();
}

function CheckCorrectAnsw1() {
    let truFls = Questions[cont].answers[x].correct;
    if (truFls) {
        resultWritten.appendChild(h2R);
        points = Math.abs((points + 1) * 2);
        if (cont < 4) {
            cont++;
        } else {
            QuizEnd();
        }
        h2W.remove();
        generateQuestions();
    } else {
        resultWritten.appendChild(h2W);
        timeLeft = timeLeft - 10;
        points = points - 3;
        if (cont < 4) {
            cont++;
        } else {
            QuizEnd();
        }
        h2R.remove();
        generateQuestions();
    }
}
function CheckCorrectAnsw2() {
    let truFls = Questions[cont].answers[x + 1].correct;
    if (truFls) {
        resultWritten.appendChild(h2R);
        points = Math.abs((points + 1) * 2);
        if (cont < 4) {
            cont++;
        } else {
            QuizEnd();
        }
        h2W.remove();
        generateQuestions();
    } else {
        resultWritten.appendChild(h2W);
        timeLeft = timeLeft - 10;
        points = points - 3;
        if (cont < 4) {
            cont++;
        } else {
            QuizEnd();
        }
        h2R.remove();
        generateQuestions();
    }
}
function CheckCorrectAnsw3() {
    let truFls = Questions[cont].answers[x + 2].correct;
    if (truFls) {
        resultWritten.appendChild(h2R);
        points = Math.abs((points + 1) * 2);
        if (cont < 4) {
            cont++;
        } else {
            QuizEnd();
        }
        h2W.remove();
        generateQuestions();
    } else {
        resultWritten.appendChild(h2W);
        timeLeft = timeLeft - 10;
        points = points - 3;
        if (cont < 4) {
            cont++;
        } else {
            QuizEnd();
        }
        h2R.remove();
        generateQuestions();
    }
}
function CheckCorrectAnsw4() {
    let truFls = Questions[cont].answers[x + 3].correct;
    if (truFls) {
        resultWritten.appendChild(h2R);
        points = Math.abs((points + 1) * 2);
        if (cont < 4) {
            cont++;
        } else {
            QuizEnd();
        }
        h2W.remove();
        generateQuestions();
    } else {
        resultWritten.appendChild(h2W);
        timeLeft = timeLeft - 10;
        points = points - 3;
        if (cont < 4) {
            cont++;
        } else {
            QuizEnd();
        }
        h2R.remove();
        generateQuestions();
    }
}

function GetLeaderboard () {
    removeStart();
    h1.textContent = "Couldn't get it to work :(";
    content.appendChild(h1);
}

// On click of ther start quiz button, the quiz start.
startQuiz.addEventListener("click", StartTheQuiz);
answ1.addEventListener("click", CheckCorrectAnsw1);
answ2.addEventListener("click", CheckCorrectAnsw2);
answ3.addEventListener("click", CheckCorrectAnsw3);
answ4.addEventListener("click", CheckCorrectAnsw4);


highScore.addEventListener("click", GetLeaderboard);
