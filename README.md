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

you might be wondering what is the que_count parameter inside the showQuestions function, the que_count loops through the questions we have in the array we created earlier. this function is decleard inside the next button functiuon which i will be talking about soon.

``` javascript
startQuizButton.addEventListener('click', () => {
    quizContainer.classList.add('active'); // display question container
    showQuestions(que_count); // render questions function looping through questions
});
```

next is the showQuestions function, let me explain what this function dose...
the show questions function dynamically render the questions from my array base on the index to the html elements as defined below, after that i called the function that checks which one of these the user selected and check if it's correct or wrong, that is the optionSelected(this) function you can see inside the for loop that loops through all the options to run the check.

```javascript
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
```

Next is the Option selected function
The optionSelected function checks the selected answer from the user if it's correct or wrong and mornitors the user score when user got correct answer, and again if the user selects the wrong answer it automatically select the correct answer..

There are some css classlist added if answer is correct and when answer is wrong.

i would recommend you download the complete code from my repo and play around this if you want to try it out..

``` javascript
// Option Selected function 
function optionSeleceted(answer) {
    let userAns = answer.textContent; // get user selected answer
    let coreAns = questions[que_count].answer; // get correct answer from my array
    let allAvaiOptions = questionOption.children;   // get all chiled element from question options

    if(userAns == coreAns) { // if user answer is equals to correct answer
        answer.classList.add('correct'); // add correct stylesheet
        questionOption.classList.add('disable'); // stop user from reselecting
        nextButton.classList.add('active'); // next button was hidden now it will deisplay.

        userScoreText.innerHTML = 'You got ' + (userScore += 1) + ' correct answers out of ' + (questions.length) + ' questions'; // increment by 1 if correct 
        console.log('correct Answer');
    } else{ // else if user answer is not correct 
        answer.classList.add('error'); // add incorrect stylesheet
        questionOption.classList.add('disable'); // stop user from reselecting
        nextButton.classList.add('active'); // next button wass hidden now it will display
        console.log('incorrect answer');

        for(i = 0; i < allAvaiOptions.length; i++) { // looping through all question options child
            if(allAvaiOptions[i].textContent == coreAns){ // if there's correct answer in the options list
                allAvaiOptions[i].setAttribute('class', 'optns correct'); // add correct stylesheet
            }
        }
    }
}
```

Another one is the next button function, let me explain what this button function dose 
The next button function fires to the next question if the current question onboard is not equal to the number of questions we have in our array else if the current question is equals to the number of questions we have in our array meaning no other question in the array to render to the user. then show result..

``` javascript
// Next Button onclick function 
nextButton.addEventListener('click', () => {
    if(que_count < questions.length - 1) { // if current question is not equal to the number of question in the array
        que_count++ // quesiton count.. increment by one that means move to the next question each time we click on next button
        showQuestions(que_count); // show questions and replace index in the parameter with que_count which loops through the question
    } else{ // else if there's no questions left in the array to render 
        showResult(); // show result 
    }

    questionOption.classList.remove('disable'); // each time i click any option disable reselection
    nextButton.classList.remove('active'); // each time i click next button disable next button untill i make a selection
});
```

And finnaly Render the result page to the user if there's no other questions to render from the array..
this is the function we called earlier.

```` javascript 
// show result 
function showResult() {
    quizContainer.classList.remove('active'); // remove quiz container, we're done
    resultPage.classList.add('active'); // display result page let's see what we got
}
````

and that's it my friends also remeber to download the complete code from my repo, you can download it and play around it..
happyCoding...
