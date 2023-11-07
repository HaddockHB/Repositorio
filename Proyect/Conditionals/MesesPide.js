// Solicitar la entrada del usuario
var mes = prompt("Ingrese un mes:");

// Convertir la entrada a minúsculas para hacer la comparación insensible a mayúsculas/minúsculas
mes = mes.toLowerCase();

// Verificar la temporada basada en el mes ingresado
if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
    console.log("La temporada es Otoño.");
} else if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
    console.log("La temporada es Invierno.");
} else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
    console.log("La temporada es Primavera.");
} else if (mes === "junio" || mes === "julio" || mes === "agosto") {
    console.log("La temporada es Verano.");
} else {
    console.log("El mes ingresado no es válido o no está asociado con una temporada.");
}