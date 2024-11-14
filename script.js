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
const text = `
¿Sabías que… en Argentina, solo el 44% de los alumnos llega al último año de primaria con conocimientos satisfactorios en Lengua y Matemática? Este dato, proporcionado por la sociedad civil "Argentinos por la Educación", refleja una realidad educativa que requiere atención urgente. A nivel internacional, estudios como el Estudio Regional Comparativo y Explicativo (ERCE) de 2019 muestran que, en América Latina y el Caribe, el avance en aprendizajes fundamentales, como lectura, escritura y matemáticas, no ha sido significativo en los últimos años.

¿La solución? Invertir en el desarrollo de las funciones ejecutivas –habilidades cruciales para la memoria, planificación, toma de decisiones y resolución de problemas– puede marcar una diferencia real en el rendimiento académico y cognitivo de los estudiantes. La ciencia y la tecnología ofrecen nuevas posibilidades: estudios recientes en neurociencias y tecnología digital muestran que el uso de herramientas digitales, especialmente los videojuegos, puede fomentar el desarrollo de las funciones ejecutivas y el crecimiento cerebral, impactando positivamente el aprendizaje.

Aprovechar el potencial de los videojuegos como recurso pedagógico en la escuela primaria representa una oportunidad única para apoyar a los docentes y ayudar a los estudiantes a fortalecer sus habilidades cognitivas mientras aprenden de forma entretenida.
`;

const container = document.getElementById("typewriter-effect");

let index = 0;

function typeWriter() {
    if (index < text.length) {
        container.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 30); // Velocidad del efecto
    }
}

typeWriter();
