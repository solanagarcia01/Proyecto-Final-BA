let currentIndex = 0;
const carousel = document.querySelector('.carousel');

function nextImage() {
    currentIndex++;
    if (currentIndex === carousel.children.length) {
        currentIndex = 0;
    }
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 300; // Ancho de cada imagen
    carousel.style.transform = `translateX(${offset}px)`;
}

setInterval(nextImage, 2000); // Cambia de imagen cada 2 segundos


let edad = prompt("Ingrese su edad:")

if (edad >= 18) {
    alert("Danos tu sugerencia!")
}
else {
    alert("No puedes completar esta sección")
}


