const preguntaActual = document.getElementById('pregunta');
const opciones = document.getElementById('opciones');
const puntuacion = document.getElementById('puntuacion');
const vidas = document.getElementById('vidas');
const btnMenu = document.querySelector("#BtnMenu");

let _vidas = 3;
let _puntuacion = 0;
let _preguntaActual = 0;
let minutos;
let segundos;
let continuar=true;

iniciarCronometro();
function mostrarPregunta() {
  const pregunta = preguntas[_preguntaActual];
  preguntaActual.textContent = pregunta.pregunta;
  
  opciones.innerHTML = '';
  pregunta.opciones.forEach(opcion => {
    const boton = document.createElement('button');
    boton.textContent = opcion;
    boton.onclick = () => verificarRespuesta(opcion);
    opciones.appendChild(boton);
  });
  const intervalId = setInterval(() => {
    if (!continuar) {
      clearInterval(intervalId);
      mostrarTiempoTranscurrido();
      return;
    }
    mostrarTiempoTranscurrido();
  }, 100);
}
   

   function verificarRespuesta(respuesta) {
     const pregunta = preguntas[_preguntaActual];
     if (respuesta === pregunta.respuesta) {
       if (pregunta.dificultad === "fácil") {
         _puntuacion += 2.5;
        } else if (pregunta.dificultad === "normal") {
          _puntuacion += 5;
        } else if (pregunta.dificultad === "difícil") {
          _puntuacion += 10;
        }
    Swal.fire('¡Correcto!', 'Respuesta correcta', 'success');
  } else {
    _vidas--;
    if (_vidas === 0) {
      Swal.fire('Respuesta incorrecta', `Respuesta Correcta: ${pregunta.respuesta}`, 'error');
      setTimeout(() => {finDelJuego();}, 1070);
      return;
    }
    Swal.fire('Respuesta incorrecta', `Respuesta Correcta: ${pregunta.respuesta}`, 'error');
  }
  puntuacion.textContent = _puntuacion;
  _preguntaActual++;
  if (_preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    finDelJuego();
  }
}

function finDelJuego() {  
  continuar=false;
  Swal.fire({
    title: '¡Fin del juego!',
    html: `Puntuación final: ${_puntuacion} <br> Tiempo: ${minutos}:${segundos} minutos`,
    input: 'text',
    inputLabel: 'Ingresa tu nombre',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: false,
    confirmButtonText: 'Guardar',
    showLoaderOnConfirm: true,
    preConfirm: (nombre) => {
      return new Promise(resolve => {
        puntajesGuardados.push({ nombre, puntuacion: _puntuacion, tiempo: `${minutos}:${segundos}` });
        puntajesGuardados.sort((a, b) => b.puntuacion - a.puntuacion || a.tiempo.localeCompare(b.tiempo));
        localStorage.setItem(JSON.stringify(Nombrelocal), JSON.stringify(puntajesGuardados));
        resolve();
      });
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('¡Puntuación guardada!', '', 'success');
    }
  });
  preguntaActual.innerHTML = "";
  opciones.innerHTML = "";
  vidas.textContent = "0";
}






function reiniciarJuego() {
  _vidas = 3;
  _puntuacion = 0;
  _preguntaActual = 0;
  puntuacion.textContent = _puntuacion;
  iniciarCronometro();
  continuar=true;
}


function iniciarCronometro() {
  tiempoInicio = performance.now();
}

function mostrarTiempoTranscurrido() {
  const tiempoActual = performance.now();
  const tiempoTranscurridoEnSegundos = Math.floor((tiempoActual - tiempoInicio) / 1000);
  minutos = Math.floor(tiempoTranscurridoEnSegundos / 60);
  segundos = tiempoTranscurridoEnSegundos % 60;
  vidas.textContent = `${_vidas} | Tiempo: ${minutos}:${segundos} minutos`;
}
  



