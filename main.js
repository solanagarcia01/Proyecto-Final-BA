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
    alert("No puedes completar esta secci�n")
}

let elemento = document.querySelector("h2");
elemento.addEventListener("click",function click(){
    alert ("Conocé Buenos Aires")
});

function mostrar(){
    document.getElementById("corazon").style.display="block";

}

function ocultar(){
    document.getElementById("corazon").style.display="none";
}

