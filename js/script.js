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




// Script para crear y animar globos dorados
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('balloonContainer');
    
    if (!container) {
        console.error('No se encontró el contenedor de globos');
        return;
    }
    
    // Detectar si es móvil
    const isMobile = window.innerWidth <= 768;
    
    // Ajustar cantidad según el dispositivo
    const initialBalloons = isMobile ? 2 : 12;
    const creationInterval = isMobile ? 5000 : 2500; // Más lento en móvil
    
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        const balloonBody = document.createElement('div');
        balloonBody.className = 'balloon-body';
        
        const balloonString = document.createElement('div');
        balloonString.className = 'balloon-string';
        
        balloon.appendChild(balloonBody);
        balloon.appendChild(balloonString);
        
        // Posición aleatoria en X
        const randomX = Math.random() * 100;
        balloon.style.left = randomX + '%';
        
        // Duración aleatoria de animación (más lento = más elegante)
        const duration = 15 + Math.random() * 10;
        balloon.style.animationDuration = duration + 's';
        
        // Delay aleatorio
        const delay = Math.random() * 5;
        balloon.style.animationDelay = delay + 's';
        
        // Tamaño ligeramente variado (más pequeño en móvil)
        const baseScale = isMobile ? 0.6 : 0.8;
        const scale = baseScale + Math.random() * 0.3;
        balloon.style.transform = `scale(${scale})`;
        
        // Añadir movimiento de balanceo al contenedor completo del globo
        balloon.style.animation += `, sway ${3 + Math.random() * 2}s ease-in-out infinite`;
        balloon.style.animationTimingFunction = 'linear, ease-in-out';
        
        container.appendChild(balloon);
        
        // Eliminar el globo después de que termine la animación
        setTimeout(() => {
            balloon.remove();
        }, (duration + delay) * 1000);
    }
    
    // Crear globos iniciales
    for (let i = 0; i < initialBalloons; i++) {
        setTimeout(() => createBalloon(), i * 800);
    }
    
    // Crear nuevos globos continuamente
    setInterval(createBalloon, creationInterval);
    
    // Recargar configuración si cambia el tamaño de ventana
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            location.reload();
        }, 500);
    });
});