const questions = {
    "questions": [
        {
            "question": "How do you round the number 7.25, to the nearest integer?",
            "answers": [ 
                "Math.round(7.25)",
                "round(7.25)",
                "Math.rnd(7.25)",
                "rnd(7.25)"
            ],
            "correctAnswer": 0
        },
        {
            "question": "Which operator is used to assign a value to a variable?",
            "answers": [
                "x",
                "-",
                "=",
                "*"
            ],
            "correctAnswer": 0
        },
        {
            "question": "How do you write \"Hello World\" in an alert box?",
            "answers": [
                "msgBox(\"Hello World\");",
                "alert(\"Hello World\");",
                "alertBox(\"Hello World\");",
                "msg(\"Hello World\");"
            ],
            "correctAnswer": 0
        },
        {
            "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
            "answers": [
                "document.getElement(\"p\").innerHTML = \"Hello World!\";",
                "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
                "#demo.innerHTML = \"Hello World!\";",
                "document.getElementByName(\"p\").innerHTML = \"Hello World!\";"
            ],
            "correctAnswer": 2
        },
        {
            "question": "What is the correct syntax for referring to an external script called \"xxx.js\"?",
            "answers": [
                "<script href=\"xxx.js\">",
                "<script src=\"xxx.js\">",
                "<script name=\"xxx.js\">",
                "<script declare=\"xxx.js\">"
            ],
            "correctAnswer": 2
        }
    ]
} 

const preguntasTodas = questions.questions.map(q => q.question);
console.log(preguntasTodas)

const respuestasTodas = questions.questions.map(a => a.answers)
console.log(respuestasTodas)

const respuestasCorrectas = questions.questions.map(cA => cA.correctAnswer);
console.log(respuestasCorrectas)
console.log(respuestasTodas[0])

class Preguntas {
    constructor(preguntasTodas, respuestasTodas){
    this.preguntasTodas = preguntasTodas
    this.respuestasTodas = respuestasTodas
    this.respuestasCorrectas = respuestasCorrectas

    }

}

const preguntasAll = new Preguntas(preguntasTodas, respuestasTodas)

console.log(preguntasAll.respuestasTodas[0][0])
console.log(preguntasAll.respuestasCorrectas[3])
console.log(preguntasAll.preguntasTodas[4])
