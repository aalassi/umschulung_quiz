

 //////w3

 
// Toggle grid padding
function myFunction() {
    var x = document.getElementById("myGrid");
    if (x.className === "w3-row") {
      x.className = "w3-row-padding";
    } else { 
      x.className = x.className.replace("w3-row-padding", "w3-row");
    }
  }
  
  // Open and close sidebar
  function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  
  




(function(){
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Welche Aufgabe gehört zu den TCP Aufgaben ?",
        answers: {
          a: "Adressierung der Datenpakete",
          b: "Wahl des effektivsten (schnellsten) Weges im Internet/Netzwerk (Netzwerkknotenpunkte)",
          c: "Datensicherheit"
        },
        correctAnswer: "c"
      },
      {
        question: "Auf welcher OSI-Schicht ist FTP ?",
        answers: {
          a: "Kommunikationsschicht (Session Layer)",
          b: "Darstellungsschicht (Presentation Layer)",
          c: "Anwendungsschicht (Application Layer)"
        },
        correctAnswer: "c"
      },
      {
        question: "welche Netzwerkhardwarekomponenten gehört zu den Aktiven Netzwerkhardwarekomponenten ?",
        answers: {
          a: "Anschlussdose",
          b: "Switch",
          c: "Steckverbinder",
          d: "Patchkabel und Installationskabel"
        },
        correctAnswer: "d"
      }
    ];
  
    buildQuiz();
  
    submitButton.addEventListener('click', showResults);
  })();






 
