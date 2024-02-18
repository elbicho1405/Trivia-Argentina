let Nombrelocal = "PuntajesTriviaARG";
const CardBody = document.getElementById('CardBody');
const puntajesGuardados = JSON.parse(localStorage.getItem(Nombrelocal)) || [];
const btnMenu = document.querySelector("#BtnMenu");

function verMejoresPuntajes() {
  const CardBody = document.getElementById('CardBody');
  CardBody.innerHTML = ""; // Limpiar la lista antes de agregar los puntajes

  puntajesGuardados.forEach(puntaje => {
    const listItem = document.createElement('li');
    listItem.textContent = `${puntaje.nombre} - Puntuación: ${puntaje.puntuacion}, Tiempo: ${puntaje.tiempo}`;
    CardBody.appendChild(listItem);
  });
}

function mostrarMenu(event) {
  event.preventDefault(); 
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