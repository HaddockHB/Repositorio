// Obtener la fecha y hora actual
const fechaActual = new Date();

// Obtener el año actual
const añoActual = fechaActual.getFullYear();

// Obtener el mes actual (0 = enero, 1 = febrero, ..., 11 = diciembre)
const mesActual = fechaActual.getMonth() + 1; // Sumamos 1 para obtener un número del 1 al 12.

// Obtener el día del mes actual
const diaActual = fechaActual.getDate();

// Obtener el día de la semana actual (0 = domingo, 1 = lunes, ..., 6 = sábado)
const diaSemanaActual = fechaActual.getDay();

// Obtener la hora actual
const horaActual = fechaActual.getHours();

// Obtener los minutos actuales
const minutosActuales = fechaActual.getMinutes();

// Obtener los segundos transcurridos desde el 1 de enero de 1970
const segundosDesde1970 = fechaActual.getTime() / 1000;

// Imprimir los resultados
console.log("¿Qué año es hoy?", añoActual);
console.log("¿Qué mes es hoy con un número?", mesActual);
console.log("¿Qué fecha es hoy?", diaActual);
console.log("¿Qué día es hoy con un número?", diaSemanaActual);
console.log("¿Cuál es la hora actual?", horaActual);
console.log("¿Cuántos minutos hay actualmente?", minutosActuales);
console.log("Número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora:", segundosDesde1970);