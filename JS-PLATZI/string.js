// Creacion de string
const primeraOpcion = 'Comillas Simples'
const segundaOpcion = "Comillas Dobles"
const terceraOpcion = `Comillas Simples`

// 1 Concatenacion Opcion +
const direccion = 'Calle 213'
const ciudad = 'Spriendfield'
const direccionCompleta = 'Mi direccion completa es ' + direccion +  ciudad  
console.log(direccionCompleta)

const direccionCompletaConEspacio = 'Mi direccion completa es ' + direccion +  ' ' + ciudad
console.log(direccionCompletaConEspacio)

// 2 Concatenacion Opcion Template Literals
const nombre = 'José'
const pais = 'México'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

// 3 Concatenacion Opcion join()
const primeraParte = 'Me gusta'
const segundaParte = 'la gente'
const terceraParte = 'de 🚩'
const pensamienmto = [primeraParte, segundaParte, terceraParte]
console.log(pensamienmto.join(' '))

// 4 Concatenacion Opcion concat()
const hoobie1 = 'correr'
const hoobie2 = 'leer'
const hoobie3 = 'estudiar'
console.log('Mis hoobies son: '.concat(hoobie1, ', ', hoobie2, ', ' ,hoobie3))

// Carracxteres de escape
// const whatDoIDo = 'I'm Software Engineer'

// 1. Escape alternativo
const escapeAlternativo = "I'm Software Engineer"
console.log(escapeAlternativo)

// 2. Barra Invertida
const barraInvertida = 'I\'m Software Engineer'
console.log(barraInvertida)

// 3. Template Literals
const escapeComillaInvertida = `I'm Software Engineer`
console.log(escapeComillaInvertida)

// Escritura de strings largos
/*
    Las rosas son rojas
    Las violetas azules
    Caracter inesperado 
    En la linea 86
*/

const poema = 'Las rosas son rojas,\n' + 
                'Las violetas azules,\n'+
                'Caracter inesperado,\n'+
                'En la linea 86'
console.log(poema)

const poema2 = 'Las rosas son rojas,\n\
Las violetas azules,\n\
Caracter inesperado,\n\
En la linea 86'
console.log(poema2)

const poema3 = `Las rosas son rojas, 
Las violetas azules,
Caracter inesperado,
En la linea 86`
console.log(poema3)




