function convertir() {
    // Obtener el valor en grados Celsius
    var celsius = document.getElementById('celsius').value;
  
    // Convertir a grados Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;
  
    // Mostrar el resultado
    document.getElementById('resultado').innerText = celsius + " grados Celsius son " + fahrenheit.toFixed(2) + " grados Fahrenheit.";
  }
  