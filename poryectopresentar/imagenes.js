let sliderInner = document.querySelector(".slider--inner");
let images = sliderInner.querySelectorAll("img");
let index = 0;  // Comenzamos desde la primera imagen

setInterval(function() {
    let percentage = index * -100;  // Calculamos el porcentaje de desplazamiento
    sliderInner.style.transform = "translateX(" + percentage + "%)";  // Movemos el slider
    index++;  // Incrementamos el índice para la siguiente imagen
    if (index >= images.length) {
        index = 0;  // Si llegamos al final, volvemos al principio
    }
}, 1000);  // El intervalo de cambio es cada 1 segundo (1000 ms)
