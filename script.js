// Set global variable. things that will change through the program. 
let countDown;
let time;
let currentQuestion = 0;

// Setting questions in array of objects
const questions = [
 {   
    questionText: 'Which of the following type of variable is visible only within a function where it is defined?',
    options: ['A. Global Variable', 'B. Local variable', 'C. Both of the above.', 'D. None of the above.'],  
    answer: "B. Local Variable",

},
{
    questionText: 'Which of the following function of String object extracts a section of a string and returns a new string?',
    otions: ['A. slice()', 'B. split()', 'C. replace()', 'D. search()'],
    answer: 'A. slice()',        
        
},
{
    questionText:'Which of the following function of Array object returns a string representing the array and its elements?',
    options: ['A. toSource()', 'B. sort()', 'C. splice()', 'D. toString()'],
    answer: 'D. toString()'

},
{
    questionText: 'How do you call a function named "myFunction"?',
    options: ['A. Call myfunction()', 'B. myfunction', 'C. myFunction()', 'D. None of the above'],
    answer: 'C. myFunction()'

},
{
    questionText: 'How does a FOR loop start?',
    options: ['A. for(var = i, i<10, i++)', 'B. for(i<=10; i--)', 'C. for (var i = 0; i < 10; i++', 'D. None of the abover'],
    answer: 'C. for (var i = 0; i < 10; i++'

},
{
    questionText: 'What is the correct way to write a JavaScript array?',
    options: ['A. var colors = (1. Red), (2.Blue), (3. Yellow), (4. Black)', 
            'B. var colors = [1. Red, 2. Blue, 3. Yellow, 4. Black]', 
            'C. var colors = ["1. Red", "2. Blue", "3. Yellow", "4. Black"]', 
            'D. var colors = {"1. Red", "2. Blue", "3. Yellow", "4. Black"}'
            ],
    answer: 'C. var colors = ["1. Red", "2. Blue", "3. Yellow", "4. Black"]'

}
];

//Targeting containers by id to hide the content
const startPage = document.querySelector('#intro-paragraph');
const questionPage = document.querySelector('#question-screen');
const scorePage = document.querySelector('#All-done');
const highscorePage = document.querySelector('#highscore');

//function that hide all pages
function hidePages(){
startPage.setAttribute('class', 'hide');
questionPage.setAttribute('class', 'hide');
scorePage.setAttribute('class', 'hide');
highscorePage.setAttribute('class', 'hide');
}


//Event listener to start quiz
document.querySelector('#start-quiz').addEventListener('click', startQuiz());

//Start Quiz function
function startQuiz(){
    //first call hidePages function to hide all page but only change class on questionPage 
    //then assign 0 to currentPage to start countdown
    hidePages();
    questionPage.removeAttribute('class');

    // call function display question
    displayQuestion();

    //start time when click
    time= 75;

    //start countdonw funtion. decrement by 1 second
    countDown = setInterval(decreTime, 1000);

    // call displayTime function when the button is clicked
    displayTime();

}
// functin countdown time by 1 second. End the game if time < 1
function decreTime(){
    time--;
    displayTime();
    if (time < 1) {
        stopQuiz();
    }

};

// target id time
const timeDisplay = document.querySelector('#time');
// display time function
function displayTime(){
    timeDisplay.textContent = time;
}

// display question function after the startQuiz function. Display both question and choices from the array question

function displayQuestion(){
    // target question-screens id
    // let the variables be assigned with the value from the array of objects.
    let questionScreen = document.querySelector('#');
    let question = questions[currentQuestion];
    let options = question.options;

    // loop through question choice when displayQuestion

    for (let i = 0; i < options.lenth; i++) {
        let choice = options[i];
        let choiceBtn = document.querySelector('#choice' + i);
        choiceBtn.textContent = choice;

    }
};
    
// When I clck the choice button: i want it to check for answer, calculate the time if incorect then move to next question
// check for answer function
// first target event listener from user-choce id. target only the button that was clicked on
let clickEvent = document.querySelector('#user-choice');
clickEvent.addEventListener('click', checkAnswer);

// create function taht compare click choice with answer from question array


// check the ansnwer and calculate time


// increment question. display question if currentQuestion <question.lenth else stopQuiz


//  stopQuiz function. endInterval(countDown) then hidequestion 


// let user-score be the final time. 


// target submit btn and add event listener then store the score by callin userScore function


//function userScore() 


//function that display highscore. 


// function that arrange highscore from higest to lowest


// funciton that clear highscore (local storage) and display empty highscore


// fuction that hide the highscore page then return to startQuiz function. remove attribute 'hidden'


// return all funtion to default state. 
//that means I need to reassign default vaule to all the global variable

// display highscore if click. assign time at 75 seconds 



