// Obtener la edad del usuario y almacenarla en la variable "myAge"
var myAge = prompt("Ingrese su edad:");

// Convertir la entrada a un número
myAge = parseInt(myAge);

// Obtener la edad de la otra persona y almacenarla en la variable "yourAge"
var yourAge = prompt("Ingrese la edad de la otra persona:");

// Convertir la entrada a un número
yourAge = parseInt(yourAge);

// Comparar las edades
if (myAge > yourAge) {
    console.log("Eres " + (myAge - yourAge) + " años mayor que la otra persona.");
} else if (yourAge > myAge) {
    console.log("La otra persona es " + (yourAge - myAge) + " años mayor que tú.");
} else {
    console.log("Tienen la misma edad.");
}