// Solicitar la entrada del usuario
var edad = prompt("Ingrese su edad:");

// Convertir la entrada a un número
edad = parseInt(edad);

// Comprobar si la edad es mayor o igual a 18
if (edad >= 18) {
    console.log("Tiene la edad suficiente para conducir.");
} else {
    // Calcular cuántos años faltan para cumplir 18
    var añosFaltantes = 18 - edad;
    console.log("Te faltan " + añosFaltantes + " años para conducir.");
}