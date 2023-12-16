const Muestrapreg = document.getElementById('pregunta');
const Opciones = document.getElementById('opciones');
const MuestraPun = document.getElementById('puntuacion');
const MuestraVidas = document.getElementById('vidas');
const puntajesGuardados = JSON.parse(localStorage.getItem('puntajes')) || [];
let vidas = 3;
let puntuacion = 0;
let preguntaActual = 0;

function MostrarPregunta() {
  const q = preguntas[preguntaActual];
  Muestrapreg.textContent = q.pregunta;

  Opciones.innerHTML = '';
  q.opciones.forEach(opcion => {
    const boton = document.createElement('button');
    boton.textContent = opcion;
    boton.onclick = () => VerificarRespuesta(opcion);
    Opciones.appendChild(boton);
  });
  MuestraVidas.textContent = `${vidas}`;
}

function VerificarRespuesta(respuesta) {
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
      Swal.fire('¡Incorrecto!', 'Respuesta incorrecta', 'error');
      setTimeout(() => {FinDelJuego();}, 2000);
      setTimeout(() => {return;}, 2000);
    }
    Swal.fire('¡Incorrecto!', 'Respuesta incorrecta', 'error');
  }
  MuestraPun.textContent = puntuacion;
  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    MostrarPregunta();
  } else {
    FinDelJuego();
  }
}

function FinDelJuego() {
  Swal.fire({
    title: '¡Fin del juego!',
    text: `Puntuación final: ${puntuacion}`,
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
        puntajesGuardados.push({ nombre, puntuacion });
        localStorage.setItem('puntajes', JSON.stringify(puntajesGuardados));
        resolve();
      });
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('¡Puntuación guardada!', '', 'success');
    }
  });
  Muestrapreg.innerHTML="";
  Opciones.innerHTML="";
  MuestraVidas.textContent = "0";
}

function MostrarMenu() {
  Swal.fire({
    title: 'Menú',
    showCancelButton: true,
    confirmButtonText: 'Iniciar juego',
    cancelButtonText: 'Ver mejores puntajes'
  }).then((result) => {
    if (result.isConfirmed) {
      ReiniciarJuego(); 
      MostrarPregunta();
    } else {
      VerMejoresPuntajes();
    }
  });
}

function VerMejoresPuntajes() {
  Swal.fire('Los mejores puntajes', `${JSON.stringify(puntajesGuardados)}`, 'info');
}

function ReiniciarJuego() {
  vidas = 3;
  puntuacion = 0;
  preguntaActual = 0;
  MuestraPun.textContent = puntuacion;
}

MostrarMenu();
