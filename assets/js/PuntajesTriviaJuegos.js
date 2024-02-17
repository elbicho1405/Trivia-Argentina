let Nombrelocal = "PuntajesTriviaJuegos";
const CardBody = document.getElementById('CardBody');
const puntajesGuardados = JSON.parse(localStorage.getItem(Nombrelocal)) || [];

function verMejoresPuntajes() {
  puntajesGuardados.forEach(puntaje => {
    CardBody.innerHTML += `<li>${puntaje.nombre} - Puntuación: ${puntaje.puntuacion}, Tiempo: ${puntaje.tiempo}</li>`;
  });
}

function mostrarMenu() {
  Swal.fire({
    title: 'Menú',
    showCancelButton: true,
    confirmButtonText: 'Iniciar juego',
    cancelButtonText: 'Ver mejores puntajes'
  }).then((result) => {
    if (result.isConfirmed) {
      reiniciarJuego();
      mostrarPregunta();
    } else {
      window.location.href = '../pagina/PuntajesJuego.html';
    }
  });
}

btnMenu.addEventListener("click", mostrarMenu);
