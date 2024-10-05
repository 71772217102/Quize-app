const QuestionSet = [
    {
        question:"What is the capital of France?",
        options:["Berlin", "Madrid", "Paris", "Rome"],
        answer:2
    },
    {
        question:"What is 100 + 2?",
        options:["234", "102", "543", "211"],
        answer:1
    },
    {
        question:"What is the largest planet in our solar system?",
        options:["Earth", "Mars", "Jupiter", "Saturn"],
        answer:2
    },
    {
        question:"Which language is used to style web pages?",
        options:["HTML", "CSS", "JavaScript", "Python"],
        answer:1
    },
    {
        question:"What is the boiling point of water?",
        options:["90°C", "50°C", "100°C", "150°C"],
        answer:2
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    document.querySelector(".starting-page").style.display = "none";
    document.querySelector(".Quize-container").style.display = "block";
    loadQuestion();
}

// Load question and options
function loadQuestion() {
    const questionElement = document.querySelector(".Question");
    const options = document.getElementsByName("choices");

    // Show the question
    questionElement.innerText = QuestionSet[currentQuestion].question;

    // Load options
    QuestionSet[currentQuestion].options.forEach((option, index) => {
        options[index].nextSibling.textContent= option; // Display option text next to the radio button
        options[index].checked = false; // Uncheck options when loading a new question
    });

    // Show "Previous" button if we're past the first question
    const previousButton = document.querySelector(".previous-btn");
    if (currentQuestion > 0) {
        previousButton.style.display = "inline-block";
    } else {
        previousButton.style.display = "none";
    }

    // Always show the "Next" button on all questions
    const nextButton = document.querySelector(".next-btn");
    nextButton.style.display = "inline-block";
}

// Go to the next question
function next() {
    const options = document.getElementsByName("choices");
    let selectedAnswer = -1;

    // Get the selected answer
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedAnswer = parseInt(options[i].value);
            break;
        }
    }

    // Ensure an answer was selected
    if (selectedAnswer === -1) {
        alert("Please select an answer before proceeding.");
        return;
    }

    // Update score if the answer is correct
    if (selectedAnswer === QuestionSet[currentQuestion].answer) {
        score++;
    }

    // Go to the next question or show score
    currentQuestion++;
    if (currentQuestion < QuestionSet.length) {
        loadQuestion();
    } else {
        
    document.querySelector(".Question-container").style.display = "none";
    document.querySelector(".Answer-container").style.display = "block";
    }
}

// Show the score after the quiz ends
function submit() {
    const subText=document.querySelector(".subText");
    subText.style.display="none";
    const submitbutton=document.querySelector(".submit-btn");
    submitbutton.style.display="none";
    const getName=document.getElementById("name");
    const getprint=document.getElementById("printname");
    getprint.innerText=" Great job "+getName.value+" Here's your score!";
    document.querySelector(".score-sec").innerText = `Your score is: ${score}/${QuestionSet.length}`;
}

// Go to the previous question
function previous() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}
