// =====================================
// CALCULADORA CON FUNCIONES
// =====================================

// Función suma
function sumar(a, b) {
    resultado = a + b;
    return resultado;
}

// Función resta
function restar(a, b) {
resultado = a - b;
return resultado;
}

// Función multiplicación
function multiplicar(a, b) {
    resultado = a * b;
    return resultado;
}

// Función división
function dividir(a, b) {
    resultado = a / b;
    return resultado;
}

// Funcion potencia
function potencia(a, b) {
    resultado = a ** b;
    return resultado;
}

// Funcion numero mayor
function numeroMayor(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Los números son iguales";
    }

    //Evitar dividir por cero
    if (b === 0) {
        return "Error: No se puede dividir por cero";
    }   
}
// =====================================
// LLAMADO DE FUNCIONES
// =====================================

console.log("Resultado suma:");
console.log(sumar(10, 5));

console.log("----------------");

console.log("Resultado resta:");
console.log(restar(10, 5));

console.log("----------------");

console.log("Resultado multiplicación:");
console.log(multiplicar(10, 5));

console.log("----------------");

console.log("Resultado división:");
console.log(dividir(10, 5));

console.log("----------------");

console.log("Resultado potencia:");
console.log(potencia(10, 8));

console.log("----------------");

console.log("Número mayor:");
console.log(numeroMayor(10, 5));

console.log("----------------");

console.log("no se puede dividir por cero:");
console.log(dividir(10, 0));