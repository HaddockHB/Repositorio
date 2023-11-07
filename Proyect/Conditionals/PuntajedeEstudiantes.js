// Solicitar el puntaje del estudiante
var puntaje = prompt("Ingrese el puntaje del estudiante:");

// Convertir la entrada a un número
puntaje = parseInt(puntaje);

// Calificar al estudiante
if (puntaje >= 80 && puntaje <= 100) {
    console.log("La calificación es A");
} else if (puntaje >= 70 && puntaje < 80) {
    console.log("La calificación es B");
} else if (puntaje >= 60 && puntaje < 70) {
    console.log("La calificación es C");
} else if (puntaje >= 50 && puntaje < 60) {
    console.log("La calificación es D");
} else if (puntaje >= 0 && puntaje < 50) {
    console.log("La calificación es F");
} else {
    console.log("El puntaje ingresado no es válido. Debe estar en el rango de 0 a 100.");
}