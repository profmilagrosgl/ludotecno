// Script para el menú hamburguesa
document.getElementById('navbar-toggle').addEventListener('click', function() {
    const menu = document.getElementById('navbar-menu');
    menu.classList.toggle('active'); // Alternar la clase 'active' en el menú
});


let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].style.display = 'none'; // Ocultar imagen actual
    currentIndex = (currentIndex + 1) % totalImages; // Incrementar índice y reiniciar al llegar al final
    images[currentIndex].style.display = 'block'; // Mostrar siguiente imagen
}

setInterval(showNextImage, 3000); // Cambiar imagen cada 3 segundos
