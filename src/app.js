
const questionList = [
    {
        title : 'What file extension (file type) will you use to save a website file?',
        a : "html",
        b : ".web",
        c : ".html",
        d : "chrome",
        ans : 'ques3'
    },
    {
        title : 'What is the meaning of HTML?',
        a : "HyperText Makeup Language",
        b : "How To Meet Ladies",
        c : "HyperText Markup Language",
        d : "Himel Tomar Mama Lage",
        ans : 'ques3'
    },
    {
        title : 'How would you write a paragraph for a website (pay attention)?',
        a : "<p/>paragraph</p>",
        b : "<p>I am a paragraph<p>",
        c : "<p>He is not in the right paragraph.<p/>",
        d : "<p>All of the above are wrong.</p>",
        ans : 'ques4'
    },
    {
        title : 'How many HTML heading tags are there?',
        a : "8",
        b : "5",
        c : "6",
        d : "3",
        ans : 'ques3'
    },
    {
        title : 'Which one is the third biggest heading tag?',
        a : "<h3>jaan pakhi potato potato<h3>",
        b : "<h1>I love you, jaan pakhi</h1>",
        c : "<h3>I love you, jaan pakhi</h3>",
        d : "<H3>I love you, jaan pakhi</H3>",
        ans : 'ques3'
    },
    {
        title : 'If you click on an anchor tag, where will it usually open.',
        a : "It will open in a new tab.",
        b : "It will open in the current tab.",
        c : "Abbu basai, can not open the door now",
        d : "It will open new browser window",
        ans : 'ques2'
    },
    {
        title : 'Which is an example of an image tag?',
        a : '<img href="dog.jpg" alt="my dog">',
        b : '<img img="dog.jpg" alt="my dog">',
        c : '<img src="dog.jpg" alt="my dog">',
        d : '<image="dog.jpg" alt="my dog">',
        ans : 'ques3'
    },
    {
        title : 'How will you write a list item tag containing the word mobile?',
        a : "<ul>mobile</ul>",
        b : "<ol>mobile</ol>",
        c : "<li>mobile</li>",
        d : "<item>mobile</item>",
        ans : 'ques3'
    },
    {
        title : 'How would you write a button tag?',
        a : "<buton></buton>",
        b : "<btn></btn>",
        c : "<button></button>",
        d : "<botboti></botboti>",
        ans : 'ques3'
    },
    {
        title : 'Which attribute is not a part of the input tag (if needed, google it)?',
        a : "type",
        b : "src",
        c : "placeholder",
        d : "name",
        ans : 'ques2'
    }
];

const quizSection = document.querySelector('.quiz-section');
const quizCount = document.getElementById('quiz-count');
const questionCount = document.getElementById('question-count');
const questionTitle = document.getElementById('question-title');
const ques1 = document.getElementById('ques1');
const ques2 = document.getElementById('ques2');
const ques3 = document.getElementById('ques3');
const ques4 = document.getElementById('ques4');
const next = document.getElementById('next');
const refresh = document.getElementById('refresh');
const inputChecks = document.getElementsByClassName('checked');
const totalWin = document.getElementById('total-win');
const totalQuiz = document.getElementById('total-quiz');
const resultDisplay = document.querySelector('.result-display');
resultDisplay.style.display = "none";

let i = 1;
let index = 0;
let count = 0;
let win = 0;
let lose = 0;

function quiz() {
    questionTitle.innerHTML = questionList[i].title;
    ques1.innerText = questionList[i].a;
    ques2.innerText = questionList[i].b;
    ques3.innerText = questionList[i].c;
    ques4.innerText = questionList[i].d;
}

function quizTest() {
    let c = Array.from(inputChecks);
    let checks;
    let checkValue;
    c.forEach((event)=>{
            checks = event.checked;
            checkValue = event.value;
        if (checks) {
            let answer = questionList[count].ans;
            if (checkValue === answer) {
                win++;
                count++;
                event.checked = false;
            }else{
                count++;
                event.checked = false;
            }
        }
    })
    
    totalWin.innerText = win;
    totalQuiz.innerText = questionList.length;
}


next.addEventListener('click', ()=>{
    if (i <= questionList.length) {
        if (i >= questionList.length - 1) {
            quizSection.style.display = "none";
            resultDisplay.style.display = "flex";
        }
        quiz();
        quizTest();
        i++;
        index++;
        quizCount.innerText = `${i}`;
        questionCount.innerText = `${i}`
    }
})

refresh.addEventListener('click', ()=>{
    location.reload();
});
