const timerContainerEl = document.getElementById("timerContainer");
const timerTextEl = document.getElementById("timerText");
const startTextEl = document.getElementById("startText");
const startButton= document.getElementById("startButt");
const questionContainerEl= document.getElementById("questionContainer");
const choicesContainerElement= document.getElementById("choices");
//const mainContainerElement = document.getElementById(main)[0];
//const sumbitScoreFormEl = document.getElementById("submitScoreForm");
const playerNameInputEl = document.getElementById("nameInput");
//const scoreSubmitButtEl = document.getElementById("submitScoreButt");

const MAX_TIME_REMAIN_SECS = 60;
const INTERVAL_TIMEOUT_MS = 1000;

var startEl= document.getElementById("startScreen");
var currentQuestion= 0;

//showTimer: function () {
//    timerTextEl.textContent = this.getTimeRemaining();
//    timerContainerEl.style.display = "block";
//}

function startGame(){
    startTextEl.style.display = "none";
    questionContainerEl.style.display = "block";
    //showTimer();
    renderQuestion();
    renderAnswers();
}

function renderQuestion(){
    var questionsToRender = questions[currentQuestion];
    questionContainerEl.textContent = questionsToRender.question;
};

function renderAnswers(){
    var choicesToRender = questions[currentQuestion].choices;
    Object.values(choicesToRender).forEach(function(choice, index){
        var choiceElement = document.createElement("button");
        choiceElement.textContent = choice;
        questionContainerEl.append(choiceElement);
        console.log(choicesToRender)

    })
    
}
//check right answers

startButton.addEventListener("click", startGame);
choicesContainerElement.addEventListener("click", checkAnswer);

function checkAnswer(){
    var correct = questions[currentQuestion].choices[correct];
    if (choices == correct) {
        currentQuestion++;
    }
}

//  Pull up next questions