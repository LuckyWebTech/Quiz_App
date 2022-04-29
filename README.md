# Quiz_App

I created this using HTML, CSS, and JavaScript it's  a very simple one, any biginner can do this to test his/her JavaScript skill, 

The main functionality of this app is to render questions to the user, when the question is rendered there are event listeners that checks for which answer user selected and if answer matches the correct answer then the user scored one point at the end, it calculates how many answers the user got and render it at the end of the questions.

## Let's see how i created this

Here i will be explaining the javaScript aspect, to see the complete code check my repo.. https://github.com/LuckyWebTech/Quiz_App

I have a JavaScript folder named js inside i have a file named script.js

at the top of the script.js file file i created the questions Array... see example below 

``` javascript 
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
]
```
Defining the array this way i can add more questions inside 

so after this was done, next i required all the neccessary elements from html ... see below 

``` javascript 
let startQuizButton = document.querySelector('.startQuizBtn');
let quizContainer = document.querySelector('.container');
let questionText = document.querySelector('.que_text');
let questionOption = document.querySelector('.que_options');
let nextButton = document.querySelector('.next_btn');
let status = document.querySelector('.status');
let userScoreText = document.querySelector('.score');
let resultPage = document.querySelector('.result_page');
let restartQuizButton = document.querySelector('.restartQuizBtn');
```

next i declared a variable que_count and userScore which is the question count and the user score equals to zero when ever we are starting our quiz... see below

``` javascript 
let que_count = 0;
let userScore = 0;
```

next is the start quiz button function, let me explain what this function dose ..

the start quiz button function dose two things, it displays the quiz container which is set to display none by default, then it renders the questions to the user..

you might be wondering what is the que_count parameter inside the showQuestions function, it's simple, the que_count loops through questions we have in the array we created earlier it's decleard insid the next buttong functiuon which i will be talking about soon.

``` javascript
startQuizButton.addEventListener('click', () => {
    quizContainer.classList.add('active');
    showQuestions(que_count);
});
```

writing.......



