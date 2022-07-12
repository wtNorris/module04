//const timerContainerEl = document.getElementById("timerContainer");
const timerTextEl = document.getElementById("timerText");
//const directionTextEl = document.getElementById("directionText");
const startButton= document.getElementById("startButt");
const questionContainerElement= document.getElementById("questionContainer");
const choicesContainerElement= document.getElementById("choices");
//const mainContainerElement = document.getElementById(main)[0];
//const sumbitScoreFormEl = document.getElementById("submitScoreForm");
//const playerNameInputEl = document.getElementById("playerNameInput");
//const scoreSubmitButtEl = document.getElementById("submitScoreButt");

//const MAX_TIME_REMAIN_SECS = 60;
//const INTERVAL_TIMEOUT_MS = 1000;

var startEl= document.getElementById("startScreen");
var currentQuestion= 0;



startButton.addEventListener("click", startGame);

showTimer: function () {
    timerTextEl.textContent = this.getTimeRemaining();
    timerContainerEl.style.display = "block";
}

function startGame(){
    startEl.style.display = "none";
    questionContainerElement.style.display = "block";
    showTimer();
    renderQuestion();
}

function renderQuestion(){
    var questionsToRender = questions[currentQuestion];
    questionContainerElement.textContent = questionsToRender.question;
    renderAnswers();

    console.log(questionContainerElement);
};

function renderAnswers(){
    var choicesToRender = questions[currentQuestion].choices;
    Object.values(choicesToRender).forEach(function(choice, index){
        var choiceElement = document.createElement("button");
        choiceElement.textContent = choice;
        questionContainerElement.append(choiceElement);
        console.log(choicesToRender)

    })
    
}

choicesContainerElement.addEventListener("click", checkAnswer);
