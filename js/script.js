const cuentaRegresiva = new Date("2026-01-10T19:00:00-05:00").getTime(); // Hora Lima

function actualizaContador() {
  const ahora = new Date().getTime();
  const distancia = cuentaRegresiva - ahora;

  if (distancia < 0) {
    document.getElementById("contador").innerHTML = "¡Tiempo cumplido!";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = String(dias).padStart(2, '0');
  document.getElementById("horas").textContent = String(horas).padStart(2, '0');
  document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
  document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');
}

setInterval(actualizaContador, 1000);
actualizaContador(); // Llamada inicial

  window.addEventListener('load', () => {
    // document.getElementById('popup').style.display = 'none';
  });
  document.body.addEventListener('click', () => {
    const audio = document.querySelector("miAudio");
    audio.volume = 1;
    audio.play();

  });
  function abrirPopup() {
    document.getElementById('popup').style.display = 'flex';
  }

  function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
  }