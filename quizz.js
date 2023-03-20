const body = document.querySelector('body');
const header = document.createElement('h1');
const headerText = document.createTextNode("Dev Quizz!");
header.appendChild(headerText);
body.appendChild(header);
const nombreDiv = document.createElement("div");
const labelNombre = document.createElement("label");
labelNombre.for = "inputNombre";
labelNombre.innerHTML = "Introduce tu nombre:";
const inputNombre = document.createElement("input");
inputNombre.id = "inputNombre";
nombreDiv.appendChild(labelNombre);
nombreDiv.appendChild(inputNombre);
body.appendChild(nombreDiv);
const preguntasDiv = document.createElement("div");
const labelPreguntas = document.createElement("label");
labelPreguntas.for = "selectPreguntas";
labelPreguntas.innerHTML = "Cuantas preguntas quieres?: ";
const selectPreguntas = document.createElement("select");
selectPreguntas.id = "selectPreguntas";

for (let i = 1; i <= 5; i++) {
  const opcion = document.createElement("option");
  opcion.value = i;
  opcion.text = i;
  selectPreguntas.appendChild(opcion);
}

preguntasDiv.appendChild(labelPreguntas);
preguntasDiv.appendChild(selectPreguntas);
body.appendChild(preguntasDiv); 

const button = document.createElement('button'); 
button.type = 'button'; 
button.innerText = 'Juega'; 
button.id = 'btn-jugar';
document.body.appendChild(button); 

const btnJugar = document.getElementById('btn-jugar');
btnJugar.addEventListener('click', handleInit);

function timer(){
  alert("Tu tiempo para esta pregunta ha terminado");
}

function handleInit(event){
  event.preventDefault
  document.getElementById("pantalla").innerHTML = "  "
  console.log('aqui empieza el juego')
  const preguntasQuizz = document.createElement('div')
  document.body.appendChild(preguntasQuizz)
  const titulo = document.createElement('h1');
  titulo.textContent = 'Empezamos!'
  preguntasQuizz.appendChild(titulo)
  const pregunta1 = document.createElement('p');
  pregunta1.textContent = preguntasAll.preguntasTodas[0]
  preguntasQuizz.appendChild(pregunta1)

  function resultado() {
    var p1, p2, p3, p4, nota;
  
    if (document.getElementById('p11').checked==true) {p1=1}
    else {p1=0}
  
    if (document.getElementById('p21').checked==true) {p2=1}
    else {p2=0}
  
    if (document.getElementById('p31').checked==true) {p3=1}
    else {p3=0}
  
    if (document.getElementById('p43').checked==true) {p4=1}
    else {p4=0}
  
    if (document.getElementById('p53').checked==true) {p5=1}
    else {p5=0}
  
    nota=p1+p2+p3+p4;
    alert(" Aciertos: " + nota);
  }
  
  
  const button11 = document.createElement('button'); 
  button11.type = 'button'; 
  button11.innerText = preguntasAll.respuestasTodas[0][0]; 
  button11.id = 'btn11';
  preguntasQuizz.appendChild(button11); 
  document.getElementById("btn11").addEventListener("click", correctAnswer1);
  function correctAnswer1() {
    document.getElementById("btn11").innerHTML = "CORRECTO";
    console.log('soy el boton funcionando')
    document.getElementById("pantalla").innerHTML = "  "

  const preguntasQuizz = document.createElement('div')
  document.body.appendChild(preguntasQuizz)
  const titulo = document.createElement('h1');
  titulo.textContent = 'Muy bien! Continua!'
  preguntasQuizz.appendChild(titulo)
  const pregunta1 = document.createElement('p');
  pregunta1.textContent = preguntasAll.preguntasTodas[1]
  preguntasQuizz.appendChild(pregunta1)

  const button21 = document.createElement('button'); 
  button21.type = 'button'; 
  button21.innerText = preguntasAll.respuestasTodas[1][0]; 
  button21.id = 'btn21';
  preguntasQuizz.appendChild(button21); 
  document.getElementById("btn21").addEventListener("click", correctAnswer2);
  function correctAnswer2() {
    document.getElementById("btn21").innerHTML = "CORRECTO";
    document.getElementById("pantalla").innerHTML = "  "
    const preguntasQuizz = document.createElement('div')
  document.body.appendChild(preguntasQuizz)
  const titulo = document.createElement('h1');
  titulo.textContent = 'Ánimo que vas bien!'
  preguntasQuizz.appendChild(titulo)
  const pregunta1 = document.createElement('p');
  pregunta1.textContent = preguntasAll.preguntasTodas[2]
  preguntasQuizz.appendChild(pregunta1)

  const button31 = document.createElement('button'); 
  button31.type = 'button'; 
  button31.innerText = preguntasAll.respuestasTodas[2][0]; 
  button31.id = 'btn31';
  preguntasQuizz.appendChild(button31); 

  document.getElementById("btn31").addEventListener("click", correctAnswer3);
  function correctAnswer3() {
    document.getElementById("btn31").innerHTML = "CORRECTO";
    document.getElementById("pantalla").innerHTML = "  "
    const preguntasQuizz = document.createElement('div')
  document.body.appendChild(preguntasQuizz)
  const titulo = document.createElement('h1');
  titulo.textContent = 'Ya casi lo tienes!'
  preguntasQuizz.appendChild(titulo)
  const pregunta1 = document.createElement('p');
  pregunta1.textContent = preguntasAll.preguntasTodas[3]
  preguntasQuizz.appendChild(pregunta1)

  const button41 = document.createElement('button'); 
  button41.type = 'button'; 
  button41.innerText = preguntasAll.respuestasTodas[3][0]; 
  button41.id = 'btn41';
  preguntasQuizz.appendChild(button41);
  document.getElementById("btn41").addEventListener("click",wrongColor41)
  function wrongColor41(){
    button41.style.color='red'}

  const button42 = document.createElement('button'); 
  button42.type = 'button'; 
  button42.innerText = preguntasAll.respuestasTodas[3][1]; 
  button42.id = 'btn42';
  preguntasQuizz.appendChild(button42);
  document.getElementById("btn42").addEventListener("click",wrongColor42)
  function wrongColor42(){
    button42.style.color='red'}

  const button43 = document.createElement('button'); 
  button43.type = 'button'; 
  button43.innerText = preguntasAll.respuestasTodas[3][2]; 
  button43.id = 'btn43';
  preguntasQuizz.appendChild(button43);
  document.getElementById("btn43").addEventListener("click", correctAnswer4);
  function correctAnswer4() {
    document.getElementById("btn43").innerHTML = "CORRECTO";
    document.getElementById("pantalla").innerHTML = "  "
    const preguntasQuizz = document.createElement('div')
  document.body.appendChild(preguntasQuizz)
  const titulo = document.createElement('h1');
  titulo.textContent = 'Vamos que es la última!'
  preguntasQuizz.appendChild(titulo)
  const pregunta1 = document.createElement('p');
  pregunta1.textContent = preguntasAll.preguntasTodas[4]
  preguntasQuizz.appendChild(pregunta1)

  const button51 = document.createElement('button'); 
  button51.type = 'button'; 
  button51.innerText = preguntasAll.respuestasTodas[4][0]; 
  button51.id = 'btn51';
  preguntasQuizz.appendChild(button51);
  document.getElementById("btn51").addEventListener("click",wrongColor51)
  function wrongColor51(){
    button51.style.color='red'}

  const button52 = document.createElement('button'); 
  button52.type = 'button'; 
  button52.innerText = preguntasAll.respuestasTodas[4][1]; 
  button52.id = 'btn52';
  preguntasQuizz.appendChild(button52);
   document.getElementById("btn52").addEventListener("click",wrongColor52)
  function wrongColor52(){
    button52.style.color='red'}

  const button53 = document.createElement('button'); 
  button53.type = 'button'; 
  button53.innerText = preguntasAll.respuestasTodas[4][2]; 
  button53.id = 'btn53';
  preguntasQuizz.appendChild(button53);
  document.getElementById("btn53").addEventListener("click", correctAnswer5);
  function correctAnswer5() {
    document.getElementById("btn53").innerHTML = "CORRECTO";
    document.getElementById("pantalla").innerHTML = "  "
    const preguntasQuizz = document.createElement('div')
  document.body.appendChild(preguntasQuizz)
  const titulo = document.createElement('h1');
  titulo.textContent = 'Lo Lograste!'
  preguntasQuizz.appendChild(titulo)
  const resultado = document.createElement('p');
  resultado.textContent = `Enhorabuena jugador,tu resultado es... (Aqui lo importante es participar, no los puntos!)  . `
  preguntasQuizz.appendChild(resultado)

  const buttonReload = document.createElement('button'); 
  buttonReload.type = 'button'; 
  buttonReload.innerText = 'Volver a jugar.'; 
  buttonReload.id = 'btnrld';
  preguntasQuizz.appendChild(buttonReload);
  buttonReload.onclick="resultado()"
  document.getElementById("btnrld").addEventListener("click", _ => location.reload());


}

  const button54 = document.createElement('button'); 
  button54.type = 'button'; 
  button54.innerText = preguntasAll.respuestasTodas[4][3]; 
  button54.id = 'btn54';
  preguntasQuizz.appendChild(button54);
  document.getElementById("btn54").addEventListener("click",wrongColor54)
  function wrongColor54(){
    button54.style.color='red'}

}

  const button44 = document.createElement('button'); 
  button44.type = 'button'; 
  button44.innerText = preguntasAll.respuestasTodas[3][3]; 
  button44.id = 'btn44';
  preguntasQuizz.appendChild(button44); 
  document.getElementById("btn44").addEventListener("click",wrongColor44)
  function wrongColor44(){
    button44.style.color='red'}

  

  }

  const button32 = document.createElement('button'); 
  button32.type = 'button'; 
  button32.innerText = preguntasAll.respuestasTodas[2][1]; 
  button32.id = 'btn32';
  preguntasQuizz.appendChild(button32); 
  document.getElementById("btn32").addEventListener("click",wrongColor32)
  function wrongColor32(){
    button32.style.color='red'}

  const button33 = document.createElement('button'); 
  button33.type = 'button'; 
  button33.innerText = preguntasAll.respuestasTodas[2][2]; 
  button33.id = 'btn33';
  preguntasQuizz.appendChild(button33);
  document.getElementById("btn33").addEventListener("click",wrongColor33)
  function wrongColor33(){
    button33.style.color='red'}

  const button34 = document.createElement('button'); 
  button34.type = 'button'; 
  button34.innerText = preguntasAll.respuestasTodas[2][3]; 
  button34.id = 'btn34';
  preguntasQuizz.appendChild(button34);
  document.getElementById("btn34").addEventListener("click",wrongColor34)
  function wrongColor34(){
    button34.style.color='red'} }
  

  const button22 = document.createElement('button'); 
  button22.type = 'button'; 
  button22.innerText = preguntasAll.respuestasTodas[1][1]
  button22.id = 'btn22';
  preguntasQuizz.appendChild(button22);  
  document.getElementById("btn22").addEventListener("click",wrongColor22)
  function wrongColor22(){
    button22.style.color='red'}

  const button23 = document.createElement('button'); 
  button23.type = 'button'; 
  button23.innerText = preguntasAll.respuestasTodas[1][2]
  button23.id = 'btn23';
  preguntasQuizz.appendChild(button23); 
  document.getElementById("btn23").addEventListener("click",wrongColor23)
  function wrongColor23(){
    button23.style.color='red'}

  const button24 = document.createElement('button'); 
  button24.type = 'button'; 
  button24.innerText = preguntasAll.respuestasTodas[1][3]
  button24.id = 'btn24';
  preguntasQuizz.appendChild(button24); 
  document.getElementById("btn24").addEventListener("click",wrongColor24)
  function wrongColor24(){
    button24.style.color='red'}
  }
  const button12 = document.createElement('button'); 
  button12.type = 'button'; 
  button12.innerText = preguntasAll.respuestasTodas[0][1]
  button12.id = 'btn12';
  preguntasQuizz.appendChild(button12);
  document.getElementById("btn12").addEventListener("click",wrongColor12)
  function wrongColor12(){
    button12.style.color='red'}

  const button13 = document.createElement('button'); 
  button13.type = 'button'; 
  button13.innerText = preguntasAll.respuestasTodas[0][2]
  button13.id = 'btn13';
  preguntasQuizz.appendChild(button13);
  document.getElementById("btn13").addEventListener("click",wrongColor13)
  function wrongColor13(){
    button13.style.color='red'
  }

  const button14 = document.createElement('button'); 
  button14.type = 'button'; 
  button14.innerText = preguntasAll.respuestasTodas[0][3]
  button14.id = 'btn14';
  preguntasQuizz.appendChild(button14); 
  document.getElementById("btn14").addEventListener("click",wrongColor14)
  function wrongColor14(){
    button14.style.color='red'
  }
}





