// Quiz Questions
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Cars SUVs Sailboats",
      ],
      answer: "Cascading Style Sheets",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  
  // Start Quiz
  function startQuiz() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
    startTimer();
  }
  
  // Load Question
  function loadQuestion() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const currentQuestion = questions[currentQuestionIndex];
  
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
    });
  }
  
  // Check Answer
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.answer) {
      score++;
      document.getElementById("score").textContent = `Score: ${score}`;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      resetTimer();
    } else {
      endQuiz();
    }
  }
  
  // Timer Functions
  function startTimer() {
    let timeLeft = 10;
    const timerElement = document.getElementById("timer");
  
    timer = setInterval(() => {
      timeLeft--;
      timerElement.textContent = `Time Left: ${timeLeft}s`;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        checkAnswer(null); // Auto-submit if time runs out
      }
    }, 1000);
  }
  
  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }
  
  // End Quiz
  function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("final-score").textContent = score;
  }
  
  // Restart Quiz
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").textContent = "Score: 0";
  
    document.getElementById("result").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
  }
  