
/* 
**1- Funcion saludar:** 
pide por prompt un tipo de saludo y un nombre. Envialos la función saludar() para que combine ambos parámetros y los imprima desde dentro de la función. Ej: "hola" y "Andrés" dariía dentro de la función "hola Andrés"*/

function saludar(saludo, nombre) {
    console.log(saludo + " " + nombre);
    document.getElementById("saludar").innerHTML = saludo + " " + nombre;
}


function arrancarSaludar() {
    //pedimos los datos al usuario
    let saludoUsuario = prompt("Introduce un saludo: ");
    let nombreUsuario = prompt("Introduce un nombre: ");
    saludar(saludoUsuario, nombreUsuario);
}


/***2- Pide dos números. **
Pide si quiere sumar o restar (+/-). Según el caso, llama a la función sumar() o restar() pasándole esos parámetros y muestra el resultado de sumar o restar ambos números. Prueba a realizar esto sin return.*/


function arrancarOperacion() {
    pedirNumeros();
}

function pedirNumeros() {
    let numA = parseFloat(prompt("Introduce el primer número: "));
    let numB = parseFloat(prompt("Introduce el segundo número: "));
    let operacion = prompt("¿Quieres sumar o restar? (+/-): ");

    if (operacion === "+") {
        console.log("Has elegido sumar.");
        sumar(numA, numB);
    } else if (operacion === "-") {
        console.log("Has elegido restar.");
        restar(numA, numB);
    }
}

function sumar(numA, numB) {
    let resultado = numA + numB;
    console.log("El resultado de la suma de " + numA + " y " + numB + " es: " + resultado);
    document.getElementById("resultado").innerHTML = "El resultado de la suma de " + numA + " y " + numB + " es: " + resultado;
}

function restar(numA, numB) {
    let resultado = numA - numB;
    console.log("El resultado de la resta de " + numA + " y " + numB + " es: " + resultado);
    document.getElementById("resultado").innerHTML = "El resultado de la resta de " + numA + " y " + numB + " es: " + resultado;
}


/*3- **+EXTRA:** prueba a realizar lo mismo con return.*/

function arrancarMetodoReturn() {
    let resultadoFinal = pedirNumerosReturn();

    console.log(resultadoFinal);
    document.getElementById("resultadoReturn").innerHTML = resultadoFinal;
}

function pedirNumerosReturn() {
    let num1 = parseFloat(prompt("Introduce el primer número: "));
    let num2 = parseFloat(prompt("Introduce el segundo número: "));
    let operacion = prompt("¿Quieres sumar o restar? (+/-): ");

    if (operacion === "+") {
        return sumarReturn(num1, num2);
    } else if (operacion === "-") {
        return restarReturn(num1, num2);
    } else {
        return "Operación no válida";
    }
}

function sumarReturn(num1, num2) {
    let resultadoReturn= num1 + num2;
console.log(resultadoReturn);
    return "El resultado de la suma de " + num1 + " y " + num2 + " es: " + resultadoReturn;
}

function restarReturn(num1, num2) {
    let resultadoReturn = num1 - num2;
console.log(resultadoReturn);
    return "El resultado de la resta de " + num1 + " y " + num2 + " es: " + resultadoReturn;
}
