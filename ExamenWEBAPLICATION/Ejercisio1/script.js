function crearYMostrarTabla() {
    // Obtener el número de filas y columnas
    let filas = parseInt(document.getElementById("filas").value);
    let columnas = parseInt(document.getElementById("columnas").value);

    // Crear la tabla
    let tabla = crearTabla(filas, columnas);

    // Mostrar la tabla en la página
    mostrarTabla(tabla);
}

function crearTabla(filas, columnas) {
    let numero = filas * columnas;
    //utilizo array vacio para representar la tabla
    let tabla = [];
    //iniciamos el bucle
    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {  //esto nos sirve para ir recorriendo las filas
            fila.push(numero);  //funcion para agregar el número actual al final de la fila.
            numero -= 1;
        }
        tabla.push(fila); //agrega la fila completa a la tabla 
    }

    return tabla; //devuelve la tabla completa 
}

function mostrarTabla(tabla) {
    let tablaHTML = document.getElementById("miTabla");
    tablaHTML.innerHTML = ""; // Funcion para Limpiar tabla 
    //bucles extra
    for (let i = 0; i < tabla.length; i++) {
        let fila = tablaHTML.insertRow(); //funcion para crear filas e insertarlas.

        for (let j = 0; j < tabla[i].length; j++) {
            let celda = fila.insertCell(); //metodo para insertar celdas td y filas tr y devolver una
            celda.innerHTML = tabla[i][j];  //Asignamos el valor de la celda correspondiente
        }
    }
}