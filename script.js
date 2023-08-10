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
let rightAnswers = [];

function onload() {
    let welcome = document.getElementById('content');

    welcome.innerHTML = /*html*/ `

        <span id="welcome_line">Welcome to<br>The Awesome Programmer-Quiz</span>
        <span id="ready_line">Ready for the Challenge?</span>
        <button id="start_button" onclick="start_Questions()">START NOW <span>></span></button>
    `;
}
function start_Questions() {
    let showQuestion = questions[currentQuestion];

    document.getElementById('first_question').innerHTML = showQuestion['question'];
}
