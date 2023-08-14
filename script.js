let questions = [
    {
        "question": "Was ist der Unterschied zwischen Compiler und Interpreter?",
        "answer_1": "Compiler übersetzen den gesamten Quellcode in Maschinencode, während Interpreter den Code Zeile für Zeile ausführt",
        "answer_2": "Interpreter übersetzen den gesamten Quellcode in Maschinencode, während Compiler den Code Zeile für Zeile ausführt",
        "answer_3": "Es gibt keinen Unterschied",
        "answer_4": "Der Compiler spielt Musik und der Interpreter singt",
        "right_answer": 2
    },
    {
        "question": 'Welche Programmiersprache wird oft als "Hello World" - Sprache für Anfänger verwendet?',
        "answer_1": "Python",
        "answer_2": "JavaScript",
        "answer_3": "PHP",
        "answer_4": "HTML",
        "right_answer": 2
    },
    {
        "question": 'Was bedeutet die Abkürzung "HTML" in Bezug auf Webentwicklung?',
        "answer_1": "HyperText Markup Language",
        "answer_2": "HardTimesModelyourSoul",
        "answer_3": "HyperText Marcro Linse",
        "answer_4": "Heute tanzt mein Leguan",
        "right_answer": 2
    },
    {
        "question": "Welche Schleife wird mindestens einmal ausgeführt, auch wenn die Bedingung zu Beginn falsch ist?",
        "answer_1": "Do-While-Schleife",
        "answer_2": "Schnürsenkel-Schleife",
        "answer_3": "For-Schleife",
        "answer_4": "Flug-Schleife",
        "right_answer": 2
    },
    {
        "question": "Was ist der Wert von x nach der Ausführung dieses Codes: int x = 5; x = x++;?",
        "answer_1": "5 (Der Post-Inkrement-Operator gibt den ursprünglichen Wert zurück, bevor er erhöht wird.)",
        "answer_2": "6",
        "answer_3": "7",
        "answer_4": "0",
        "right_answer": 2
    },
    {
        "question": "Welche Datenstruktur wird verwendet, um Elemente in einer geordneten Sammlung ohne Duplikate zu speichern?",
        "answer_1": "Set",
        "answer_2": "get",
        "answer_3": "Baumstruktur",
        "answer_4": "Keine Struktur",
        "right_answer": 2
    },
    {
        "question": 'Was wird durch den Begriff "Scope" in der Programmierung beschrieben?',
        "answer_1": "Den Bereich, in dem eine Variable sichtbar und zugänglich ist.",
        "answer_2": "Den Bereich, in dem eine Konstante sichtbar und zugänglich ist.",
        "answer_3": "Den Bereich, in dem eine Variable unsichtbar und unzugänglich ist.",
        "answer_4": "Ein Programm um Scharfschützen zu helfen ihr Ziel besser zu treffen.",
        "right_answer": 2
    },
    {
        "question": 'Was ist der Unterschied zwischen "==" und "===" in JavaScript?',
        "answer_1": '"==" prüft auf Gleichheit, wobei die Typen umgewandelt werden, während "===" sowohl den Wert als auch den Typ überprüft.',
        "answer_2": '"===" prüft auf Gleichheit, wobei die Typen umgewandelt werden, während "==" sowohl den Wert als auch den Typ überprüft.',
        "answer_3": "Es gibt keinen Unterschied",
        "answer_4": '"===" ist wichtiger als "=="',
        "right_answer": 2
    },
    {
        "question": "Was ist ein 404-Fehler in Bezug auf Webseiten?",
        "answer_1": "Ein Fehler, der auftritt, wenn die angeforderte Ressource nicht gefunden wurde.",
        "answer_2": "Der Browser hat 404 Fehler gefunden.",
        "answer_3": "Der Port 404 wurde nicht gefunden.",
        "answer_4": "404 bedeutet, dass das Internet kaputt ist.",
        "right_answer": 2
    },
    {
        "question": "Welche Art von Schleife wird verwendet, um eine Sammlung von Elementen zu durchlaufen, wie z.B. eine Liste?",
        "answer_1": 'For-Schleife',
        "answer_2": "if-Schleife",
        "answer_3": "toDo-Schleife",
        "answer_4": "Mandel-Seife",
        "right_answer": 2
    }
];
let currentQuestion = 0;
let rightAnswers = 0;

function init() {

    let welcome = document.getElementById('content_for_quest');

    welcome.innerHTML = /*html*/ `

        <span id="welcome_line">Welcome to<br>The Awesome Programmer-Quiz</span>
        <span id="ready_line">Ready for the Challenge?</span>
        <button id="start_button" onclick="startQuestions()">START NOW <span>></span></button>
    `;
}
function startQuestions() {
    
    if (currentQuestion >= questions.length) {
        showEndCard();
    } else {

    document.getElementById('content_for_quest').style.backgroundImage = "none";

    document.getElementById('content_for_quest').innerHTML = /*html*/ `
        <span id="question" class="questions"></span>
        <div id="answers">
            <div onclick="proofAnswer('answer_1')" id="answer_card">
                <span id="answer_option">A</span>
                <span id="answer_1" class="style_answer"></span>
            </div>
            <div onclick="proofAnswer('answer_2')" id="answer_card">
                <span id="answer_option">B</span>
                <span id="answer_2" class="style_answer"></span>
            </div>
            <div onclick="proofAnswer('answer_3')" id="answer_card">
                <span id="answer_option">C</span>
                <span id="answer_3" class="style_answer"></span>
            </div>
            <div onclick="proofAnswer('answer_4')" id="answer_card">
                <span id="answer_option">D</span>
                <span id="answer_4" class="style_answer"></span>
            </div>
            <div id="back_and_for">
                <img onclick="moveBackward()" type="button" id="back_button" src="./img/icons8-zurück-30.png" alt="back">
                <img onclick="moveForward()" type="button" id="for_button" src="./img/icons8-vorwärts-30.png" alt="next">
            </div>
        </div>
    `;
    document.getElementById('back_button').style.pointerEvents = 'none'; // deaktiviert die "button" funktion
    document.getElementById('for_button').style.pointerEvents = 'none'; // deaktiviert die "button" funktion

    let showQuestion = questions[currentQuestion];
    
    document.getElementById('question').innerHTML = showQuestion['question'];
    document.getElementById('answer_1').innerHTML = showQuestion['answer_1'];
    document.getElementById('answer_2').innerHTML = showQuestion['answer_2'];
    document.getElementById('answer_3').innerHTML = showQuestion['answer_3'];
    document.getElementById('answer_4').innerHTML = showQuestion['answer_4'];

}
}

function proofAnswer(selectedAnswer){
    let selectedNumber = +selectedAnswer.slice(-1); // holt das letzte element aus dem string und gibt es aus zahl aus
    console.log('selectedNumber', selectedNumber);

    let rightAnswer = questions[0]['right_answer']; // holt das erste element des jsons und davon den wert im string "right_answer"
    console.log('right answer', rightAnswer);

    let idOfRightAnswer = `answer_${rightAnswer}`;

    if (selectedNumber === rightAnswer) {
        document.getElementById(selectedAnswer).parentNode.classList.add('bg-success'); // .parentNode spricht das übergeordnete element an
        rightAnswers++;
    } else {

        document.getElementById(selectedAnswer).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('back_button').style.pointerEvents = 'auto'; // aktiviert die "button" funktion
    document.getElementById('for_button').style.pointerEvents = 'auto'; // aktiviert die "button" funktion

}
function moveBackward(){
    console.log('rückwärts')
    currentQuestion--;
    startQuestions();
}
function moveForward(){
    console.log('vorwärts')
    currentQuestion++;
    startQuestions();
}
function showEndCard(){

    let numberOfQuestions = questions.length;
    
    document.getElementById('content_for_quest').innerHTML = /*html*/ `
    <div id="main-encard">
        <div id="stuff-endcard">
            <img  src="./img/brain-result.png" alt="brain-logo">
            <h2 id="headline-endcard">COMPLETE<br>PROGRAMMER-QUIZ</h2>
            <span id="your-score">YOUR SCORE ${rightAnswers}/${numberOfQuestions}</span>
            <button id="share-your-result">SHARE</button>
            <button onclick="reStartQuestions()" id="play-again">REPLAY</button>
        </div>    
        <img id="trophy-img" src="./img/tropy.png" alt="trophäe">
    </div>    
    `;
}
function reStartQuestions(){

    currentQuestion = 0;
    rightAnswers = 0;
    startQuestions();
}