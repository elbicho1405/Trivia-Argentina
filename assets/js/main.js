const elementoPregunta = document.getElementById('pregunta');
const elementoOpciones = document.getElementById('opciones');
const elementoPuntuacion = document.getElementById('puntuacion');
const elementoVidas = document.getElementById('vidas'); 
let vidas = 3; 

function mostrarPregunta() {
  const q = preguntas[preguntaActual];
  elementoPregunta.textContent = q.pregunta;
  
  elementoOpciones.innerHTML = '';
  q.opciones.forEach(opcion => {
    const boton = document.createElement('button');
    boton.textContent = opcion;
    boton.onclick = () => verificarRespuesta(opcion);
    elementoOpciones.appendChild(boton);
  });
  elementoVidas.textContent = `Vidas: ${vidas}`;
}

function verificarRespuesta(respuesta) {
  const q = preguntas[preguntaActual];
  if (respuesta === q.respuesta) {
    if (q.dificultad === "fácil") {
      puntuacion += 2.5;
    } else if (q.dificultad === "normal") {
      puntuacion += 5;
    } else if (q.dificultad === "difícil") {
      puntuacion += 10;
    }
    Swal.fire('¡Correcto!', 'Respuesta correcta', 'success');
  } else {
    vidas--; 
    if (vidas === 0) {
      finDelJuego(); 
      return;
    }
    Swal.fire('¡Incorrecto!', 'Respuesta incorrecta', 'error');
  }
  elementoPuntuacion.textContent = puntuacion;
  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    finDelJuego();
  }
}

function finDelJuego() {
  Swal.fire('¡Fin del juego!', `Puntuación final: ${puntuacion}`, 'info');
}

function siguientePregunta() {
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    finDelJuego();
  }
}

mostrarPregunta();
