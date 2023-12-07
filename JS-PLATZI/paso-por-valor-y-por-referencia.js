// Paso por valor
let x = 1
let y = 'Hola'
let z = null

let a = x
let b = y
let c = z

console.log(x, y, z, a, b, c)

a = 12 
b = 'Platzi'
c = undefined

console.log( a, b, c)

// Paso por referencia
let frutas = ['Manzana']
frutas.push('pera')
console.log(frutas)

let panes = ['🥐']
let copiaPanes = panes
panes.push('🥖')
console.log(panes, copiaPanes)