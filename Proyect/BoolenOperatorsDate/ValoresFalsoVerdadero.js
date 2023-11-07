// Declaración de variables con valores asignados y verificación de tipos de datos
var firstName = "LUIS";
var lastName = "Hernandez";
var country = "MX";
var city = "Playa_Del_Car,em";
var age = 19;
var isMarried = false;
var year = 2023;

console.log(typeof firstName); // Devolverá "string"
console.log(typeof age); // Devolverá "number"
console.log(typeof isMarried); // Devolverá "boolean"

// Verificación de si '10' es igual a 10
console.log('10' === 10); // Devolverá false

// Verificación de si parseInt('9.8') es igual a 10
console.log(parseInt('9.8') === 10); // Devolverá false, ya que '9.8' no se puede convertir en un número entero

// Verificación de cualquier valor booleano (true o false)
var booleanValue = true;
console.log(booleanValue); // Devolverá true

// Declaraciones que proporcionan un valor verdadero
console.log(5 > 3); // Devolverá true, ya que 5 es mayor que 3
console.log("hello" !== "world"); // Devolverá true, ya que "hello" no es igual a "world"
console.log(10 >= 10); // Devolverá true, ya que 10 es igual a 10

// Declaraciones que proporcionan un valor falso
console.log(2 === "2"); // Devolverá false, ya que 2 (número) no es igual a "2" (cadena)
console.log(0 || false); // Devolverá false, ya que ambas partes son falsas
console.log(!true); // Devolverá false, ya que negar true da como resultado false