const container = document.querySelector('.container')
const questionBox = document.querySelector('.question')
const choicesBox = document.querySelector('.choices')
const nextbtn = document.querySelector('.nextBtn')

// Add QUESTION
const quiz = [ 
    {
        question: "Q. Which of the following is not a css box model property?",
        choices: ["margin", "padding", "border-radius", "border-collapse"],
        answer: "border-collapse"
    },
    {
        question: "Q.Which of the following is not a valid way to declare a function in Javascript?",
        choices: ["function myFunction() {}", "let myFunction = function() {};", "myFunction: function () {}", "const myFunction = () => {};"],
        answer: "myFunction: function () {}"
    },
    {
        question: "Q. Which of the following is not a Javascript data type?",
        choices: ["string", "boolean", "object", "float"],
        answer: "float"
    },
    {
        question: "Q. What is the purpose of the this keyword in Javascript?",
        choices: ["It refers to the current function.", "It refers to the current object.", "It refers to the parent object.", "It is used for comments."],
        answer: "It refers to the current object."
    }
];


let currentQuestionIndex = 0

// to show Questions
const showQuestions =  () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = '' 
    for( let i=0; i<questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice')
        choicesBox.appendChild(choiceDiv)

        choiceDiv.addEventListener('click', () => {
            if(choiceDiv.classList.contains('selected')){
                choiceDiv.classList.remove('selected');
            }
            else{
                choiceDiv.classList.add('selected');
            }
        })
    }
}

// Function to check answers


showQuestions();
nextbtn.addEventListener('click', ()=> {
    if(currentQuestionIndex < quiz.length){
        currentQuestionIndex++;
        showQuestions();
    }
})