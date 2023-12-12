/*
Loop: for in
Un objeto es un tipo de dato complejo (ver las primeras clases), se usa para guardar información en pares propiedad:valor. En su estructura un objeto se declara como una variable con su nombre y se le asigna entre llaves {} todos los pares: propiedad: valor separados por comas:


const nombreDelObjeto = {
    propiedad1: valor1,
    propiedad2: valor2,
    ...,
    propiedadN: valorN
}
La diferencia es cómo se guarda la información: los array y string tienen items (elementos), y los objetos usan propiedad-valor.

for in se usa en objetos enumerables, para iterar en las propiedades y valores.
****La estructura es:


for (variable in objeto) {
	código a ejecutar
}
En este caso el objeto es una 'listaDeCompras' y guarda la información como fruta: unidades a comprar:


const listaDeCompras = {
    manzana: 5, 
    pera: 3, 
    naranja: 2, 
    uva: 1
}
Si quisiera iterar por estas propiedades el for in sería así:


for (fruta in listaDeCompras) {
    console.log(fruta)
}
manzana
pera
naranja
uva
Y ¿Qué pasa si quiero imprimir el valor que tiene cada una de las propiedades?

Entonces, podemos usar Template Literal, el for in sería así:


for (fruta in listaDeCompras) {
    console.log(`${fruta}: ${listaDeCompras[fruta]}`)
} 
manzana: 5
pera: 3
naranja: 2
uva: 1
¿Por qué sucede esto?
Porque cuando plateamos el for in, la variable fruta se convierte en un número de índice, entonces es como recorrer un array, donde fruta va a ser el índice de cada propiedad del objeto. Lo que indicamos al escribir ${listaDeCompras[frutas]} es que traiga el valor del índice de la propiedad que está recorriendo.

¿Que pasaría si en vez de un for in usamos un for of?
En este caso nos daría error: Uncaught TypeError: listaDeCompras is not iterable

Conclusión 💚
Cuando es array o string usamos for of. Cuando es objeto usamos for in.
*/

const listaDeCompras = {
    manzana: 5,
    sandia: 1,
    pera: 6,
    naranja: 2
}

for (fruta in listaDeCompras){
    console.log(fruta)
}

for (fruta in listaDeCompras){
    console.log(` Comprare: ${listaDeCompras[fruta]} ${fruta} `)
}