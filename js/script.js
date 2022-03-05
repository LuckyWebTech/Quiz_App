// adding Questions and Answers inside an array
let questions = [
    {
        numb: 1,
        question: 'What is HTML',
        answer: '(c) Hyper Text Markup Language',
        option: [
            '(a) Hyper Tool Markup Language',
            '(b) Hyper things Mining Language',
            '(c) Hyper Text Markup Language',
            '(d) H-Text Markup Logging'
        ]
    },

    {
        numb: 2,
        question: "Who's the founder of HTML",
        answer: '(d) Tim Bernars Lee',
        option: [
            '(a) Mack Zuckabarge',
            '(b) Bill Gates',
            '(c) Jef Bezos',
            '(d) Tim Bernars Lee'
        ]
    },

    {
        numb: 3,
        question: 'Which is correct way to comment in HTML',
        answer: '(c) <!--My comment-->',
        option: [
            '(a) // My comment',
            '(b) /* My comment */',
            '(c) <<label>!--</label>My comment-->',
            '(d) # My comment #'
        ]
    },

    {
        numb: 4,
        question: 'The HTML span element is?',
        answer: '(c) inline element',
        option: [
            '(a) a block-leve element',
            '(b) master element',
            '(c) inline element',
            '(d) deployer element'
        ]
    },

    {
        numb: 5,
        question: 'HTML <<label>p></label> element allows us to?',
        answer: '(a) add text to our web page',
        option: [
            '(a) add text to our web page',
            '(b) add texture to our web page',
            '(c) add audio to our web page',
            '(d) add link to our web page'
        ]
    },

    {
        numb: 6,
        question: 'HTML a Programming Language Used for?',
        answer: '(b) Not a programming language',
        option: [
            '(a) Creating web application',
            '(b) Not a programming language',
            '(c) Programming games',
            '(d) None of the above'
        ]
    },

    {
        numb: 7,
        question: 'Which is correct way to comment in HTML',
        answer: '(c) <!--My comment-->',
        option: [
            '(a) // My comment',
            '(b) /* My comment */',
            '(c) <<label>!--</label>My comment-->',
            '(d) # My comment #'
        ]
    },

    {
        numb: 8,
        question: 'The HTML span element is?',
        answer: '(c) inline element',
        option: [
            '(a) a block-leve element',
            '(b) master element',
            '(c) inline element',
            '(d) deployer element'
        ]
    },

    {
        numb: 9,
        question: 'Which is correct way to comment in HTML',
        answer: '(c) <!--My comment-->',
        option: [
            '(a) // My comment',
            '(b) /* My comment */',
            '(c) <<label>!--</label>My comment-->',
            '(d) # My comment #'
        ]
    },

    {
        numb: 10,
        question: 'The HTML span element is?',
        answer: '(c) inline element',
        option: [
            '(a) a block-leve element',
            '(b) master element',
            '(c) inline element',
            '(d) deployer element'
        ]
    },

    {
        numb: 11,
        question: 'Which is correct way to comment in HTML',
        answer: '(c) <!--My comment-->',
        option: [
            '(a) // My comment',
            '(b) /* My comment */',
            '(c) <<label>!--</label>My comment-->',
            '(d) # My comment #'
        ]
    },

    {
        numb: 12,
        question: 'The HTML span element is?',
        answer: '(c) inline element',
        option: [
            '(a) a block-leve element',
            '(b) master element',
            '(c) inline element',
            '(d) deployer element'
        ]
    },
]


// Selecting Elements from html
let startQuizButton = document.querySelector('.startQuizBtn');
let quizContainer = document.querySelector('.container');
let questionText = document.querySelector('.que_text');
let questionOption = document.querySelector('.que_options');
let nextButton = document.querySelector('.next_btn');
let status = document.querySelector('.status');
let userScoreText = document.querySelector('.score');
let resultPage = document.querySelector('.result_page');
let restartQuizButton = document.querySelector('.restartQuizBtn');




// Seting question count Value and User Score
let que_count = 0;
let userScore = 0;



// Start button click function 
startQuizButton.addEventListener('click', () => {
    startQuizButton.classList.add('hide');
    quizContainer.classList.add('active');

    showQuestions(que_count);
    status.innerHTML = que_count + 1 + '/' + questions.length;
});



// Show questions function 
function showQuestions(index) {
    let que_tag = '<span>' + questions[index].numb + '. ' + questions[index].question + '</span>';
    let que_options = '<span class="options">' + questions[index].option[0] + '</span>' +
                      '<span class="options">' + questions[index].option[1] + '</span>' +
                      '<span class="options">' + questions[index].option[2] + '</span>' +
                      '<span class="options">' + questions[index].option[3] + '</span>';

    questionText.innerHTML = que_tag;
    questionOption.innerHTML = que_options;

    const optns = questionOption.querySelectorAll('.options');

    for(i = 0; i < optns.length; i++) {
        optns[i].setAttribute('onclick', 'optionSeleceted(this)')
    }
};

// show result 
function showResult() {
    quizContainer.classList.remove('active');
    resultPage.classList.add('active');
}


// Next Button onclick function 
nextButton.addEventListener('click', () => {
    if(que_count < questions.length - 1) {
        que_count++
        showQuestions(que_count);
    } else{
        showResult();
    }

    questionOption.classList.remove('disable');
    status.innerHTML = que_count + 1 + '/' + questions.length;
    nextButton.classList.remove('active');
});



// Option Selected function 
function optionSeleceted(answer) {
    let userAns = answer.textContent;
    let coreAns = questions[que_count].answer;
    let allAvaiOptions = questionOption.children;

    if(userAns == coreAns) {
        answer.classList.add('correct');
        questionOption.classList.add('disable');
        nextButton.classList.add('active');

        userScoreText.innerHTML = 'You got ' + (userScore += 1) + ' correct answers out of ' + (questions.length) + ' questions';
        console.log('correct Answer');
    } else{
        answer.classList.add('error');
        questionOption.classList.add('disable');
        nextButton.classList.add('active');
        console.log('incorrect answer');

        for(i = 0; i < allAvaiOptions.length; i++) {
            if(allAvaiOptions[i].textContent == coreAns){
                allAvaiOptions[i].setAttribute('class', 'optns correct');
            }
        }
    }
}

// restart quiz button click function 
restartQuizButton.addEventListener('click', () => {
    window.location.reload();
});