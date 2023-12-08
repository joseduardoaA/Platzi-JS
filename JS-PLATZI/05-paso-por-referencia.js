// Dato Objeto Paso por referencia

let frutas = {
    naranja: '🍊'
}
let vegetales = frutas
// console.log(frutas, vegetales)

vegetales.naranja = '🥦'
console.log(frutas)

let ropa = {blusa: '👚'}

ropa.pantalon = '👖'
console.log(ropa)