//declare variable for question
var question = document.querySelector("#question");
//declare variables for questions
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
//declar var for answer
var answer = document.querySelector("#answer");

var question1 = function() {
    question.textContent = "Commonly used data types do NOT include ______.";
    correctAnswer = "3. alerts";
    //string booleans alerts numbers
    answer1.textContent = "1. Strings";
    answer2.textContent = "2. booleans";
    answer3.textContent = "3. alerts";
    answer4.textContent = "4. numbers";

    if (answer3.clicked === true) {
        answer.textContent = "Correct!";
    }
    else if(answer1.clicked === true || answer2.clicked === true || answer4.clicked === true) {
        answer.textContent = "Incorrect";
    }
}

var question2 = function() {
    
}

var question3 = function() {
    
}

question1();