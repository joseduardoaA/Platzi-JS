// Funciones Puras

// Efecto Secundario
// 1. Modificar variables globales
// 2. Modificar paranetros
// 3. Solicitudes  HTTP
// 4. Imprimir mensajes en pantalla o consola 
// 5. Manipulacion del DOM 
// 6. Obtener la hora actual

// Funcion Inpura por el console.log
function sum (a, b) {
    console.log('A:', a)
    return a + b
}

let total = 0 

// Funcion impura porque modifica una variable global
function sumWhitSideEffect (a) {
    total += a
    return total
}

// Funcion pura porque son las mismas entradas y salida
function square(x) {
    return x *x 
}

function addTen(y) {
    return y + 10
}

// Funcion pura
const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)