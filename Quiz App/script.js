const questions = [
  {
    question: "what is your name ?",
    answers: [
      { text: "shark", correct: false },
      { text: "hello", correct: false },
      { text: "john", correct: false },
      { text: "prashuk", correct: true },
    ],
  },
  {
    question: "what is your name ?",
    answers: [
      { text: "shark", correct: false },
      { text: "hello", correct: false },
      { text: "john", correct: false },
      { text: "prashuk", correct: true },
    ],
  },
  {
    question: "what is your name ?",
    answers: [
      { text: "shark", correct: false },
      { text: "hello", correct: false },
      { text: "john", correct: false },
      { text: "prashuk", correct: true },
    ],
  },
  
];

const questionelement = document.getElementById("Question");
const answerbutton = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentquestionindex = 0;
let score = 0;

function StartQuix() {
  currentquestionindex = 0;
  score = 0;
  nextbutton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {

    resetstate()

  let currentquestion = questions[currentquestionindex];
  let questionno = currentquestionindex + 1;
  questionelement.innerHTML = questionno + "." + currentquestion.question;

  currentquestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbutton.appendChild(button);

    if(answer.correct){
        button.dataset.correct = answer.correct;
    }

    button.addEventListener("click" , selectanswer)
  });
}

function resetstate(){
    nextbutton.style.display = "none"
    while (answerbutton.firstChild) {
        answerbutton.removeChild(answerbutton.firstChild)
    }
}

function selectanswer(e) {
    const selectedbutton = e.target;
    const iscorrect = selectedbutton.dataset.correct === "true";
    if(iscorrect){
        selectedbutton.classList.add("correct")
        score++;
    }else{
        selectedbutton.classList.add("incorrect")
    }

    Array.from(answerbutton.children).forEach(button=>{
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextbutton.style.display = "block";
}

function showscore() {
    resetstate();
    questionelement.innerHTML = `You Scored ${score} out of ${questions.length}`
    nextbutton.innerHTML = "play again"
    nextbutton.style.display = "block"
}

function handlenextbutton() {
    currentquestionindex++;
    if (currentquestionindex<questions.length) {
        showQuestion()
    }else{
        showscore();
    }
}

nextbutton.addEventListener("click" , ()=>{
    if (currentquestionindex<questions.length) {
        handlenextbutton();
    }else{
        StartQuix()
    }
})

StartQuix();
