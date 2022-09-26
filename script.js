var infoBar = document.getElementById('top-bar');
var highScore = document.getElementById('high-score');
var introPage = document.getElementById('intro-paragraph');
var startBtn = document. getElementById('start-quiz');
var questionContainer = document.getElementById('question-screens');
var choice = document.getElementById('user-choice');

startBtn.addEventListener('click', startGame)

function startGame(){
    startBtn.classList.add('hide')
    questionContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion(){

}

function selectAnswer(){


}
