const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question-container');
const answerButtonElement = document.getElementById('answer-button');
const nextButton = document.getElementById('next-btn');

let shuffledQuestions, currentQuestionIndex

const startGame = () => {
   console.log('hello')
   startButton.classList.add('hide');
   questionContainerElement.classList.remove('hide');
   shuffledQuestions = questions.sort(() => Math.random() - .5);
   currentQuestionIndex = 0;
   setNextQuestion()

}

const setNextQuestion = () => {
   resetState()
showQuestion(shuffledQuestions[currentQuestionIndex]);
}

const showQuestion = (question1) => {
questionElement.innerHTML = question1.question;
question1.answers.forEach(answer => {
const button = document.createElement('button')
button.innerText = answer.text
button.classList.add('btn')
if(answer.correct) {
   button.dataset.correct = answer.correct
}
button.addEventListener('click', selectAnswer)
answerButtonElement.appendChild(button)
})
}
const resetState = () => {
   clearStatusClass(document.body)
   nextButton.classList.add('hide')
   while(answerButtonElement.firstChild) {
      answerButtonElement.removeChild(answerButtonElement.firstChild)
   }
}

const selectAnswer = (e) => {
   const selectedButton = e.target
   const correct = selectedButton.dataset.correct
   setStatusClass(document.body, correct)
   Array.from(answerButtonElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
   })
   if(shuffledQuestions.length > currentQuestionIndex + 1) {
   nextButton.classList.remove('hide')
   }else{
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
   }

}

const setStatusClass = (element, correct) => {
   clearStatusClass(element)
   if(correct) {
      element.classList.add('correct')
   }else{
      element.classList.add('wrong')
   }
}

const clearStatusClass = (element) => {
   element.classList.remove('correct')
   element.classList.remove('wrong')
}

const questions = [
   {
      question: 'VS Code means?',
      answers: [
         {
            text: 'Visual Studio Code', correct: true
         },
         {
            text: 'Visual Stereo Code', correct: false
         }
      ]
   },

   {
      question: 'meaning of CSS?',
      answers: [
         {
            text: 'Cascading Style Sheet', correct: true
         },
         {
            text: 'Correct Style Sheet', correct: false
         }
      ]
   },

   {
      question: 'javaScript is a --------Language?',
      answers: [
         {
            text: 'Programming', correct: true
         },
         {
            text: 'Speaking', correct: false
         }
      ]
   },
   
   {
      question: 'Is javaScript case sensitive?',
      answers: [
         {
            text: 'Yes', correct: true
         },
         {
            text: 'No', correct: false
         }
      ]
   },
]

startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', () => {
   currentQuestionIndex++
   setNextQuestion()
})