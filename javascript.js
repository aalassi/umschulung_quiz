

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
        question: "Welche Aufgabe geh??rt zu den TCP Aufgaben ?",
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
        question: "welche Netzwerkhardwarekomponenten geh??rt zu den Aktiven Netzwerkhardwarekomponenten ?",
        answers: {
          a: "Anschlussdose",
          b: "Switch",
          c: "Steckverbinder",
          d: "Patchkabel und Installationskabel"
        },
        correctAnswer: "b"
      },
      {
        question: "OSI Modell besteht aus 5 Schichten",
        answers: {
          a: "richtig",
          b: "falsch"
        },
        correctAnswer: "b"
      },
      {
        question: "Das erste Computernetzwerk hei??t:",
        answers: {
          a: "ARPANET",
          b: "das erste Netzwerk",
          c: "USA Netzwerk"
        },
        correctAnswer: "a"
        },
        
        
        {
            question: "In dieser Topologie steht ein Switch als zentraler Knotenpunkt. Alle Stationen sind dort angeschlossen, es gibt keine direkte Kommunikation unter den Stationen. Alle Kommunikation l??uft ??ber den zentralen Knotenpunkt. Welche Topologie ?",
            answers: {
              a: "Baumtopologie",
              b: "Sterntopologie",
              c: "Maschentopologie"
            },
            correctAnswer: "b"
            },

            {
              question: "Das Ethernet ist im OSI-Modell auf Schicht 1 (Hardware) und 2 (Protokoll) zu finden.",
              answers: {
                a: "richtig",
                b: "falsch"
              },
              correctAnswer: "a"
            },

            {
              question: "Die ........... im OSI-Modell ist zust??ndig f??r die fehlerfreie ??bertragung des Bitdatenstroms, der hierf??r in Pakete aufgeteilt und mit Folgenummern und Pr??fsummen adressiert werden. Die ............ ordnet die Pakete, erkennt Fehler und korrigiert diese, um sicherzustellen, dass die Daten wie gesendet empfangen werden. Bei Fehlern wird eine erneute ??bertragung eingeleitet. Die ............. arbeitet zudem mit der MAC-Adresse, um Ger??te zu identifizieren.",
              answers: {
                a: "Bit??bertragungsschicht (Physical Layer)",
                b: "Sicherungsschicht (Data Link Layer)",
                c: "Transportschicht (Transport Layer)",
                d: "Vermittlungsschicht (Network Layer)"
              },
              correctAnswer: "b"
            },

            {
              question: "Die Schicht eins des OSI-Modells ist",
              answers: {
                a: "Transportschicht (Transport Layer)",
                b: "Vermittlungsschicht (Network Layer)",
                c: "Darstellungsschicht (Presentation Layer)",
                d: "Bit??bertragungsschicht (Physical Layer)"
              },
              correctAnswer: "d"
            },

    ];
  
    buildQuiz();
  
    submitButton.addEventListener('click', showResults);
  })();






 
