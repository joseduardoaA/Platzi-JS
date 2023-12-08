// String primitivo
const stringPrimitivo = 'Soy un string primiivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo Tambien')
console.log(typeof stringPrimitivoTambien)

// String Objeto
const stringObjeto = new String('Soy un string Objeto')
console.log(typeof stringObjeto)

// Acceder a caracteres 
const saludo = 'Hola. ¿Cómo estás?'
console.log(saludo[0]) //Te da el caracter dependiendo de la posicion que le des
console.log(saludo.charAt(1)) //Te da el caracter dependiendo de la posicion que le des
console.log(saludo.indexOf('l')) // Te dice en que posicion esta el caracter que le indiques
console.log(saludo.lastIndexOf('e')) // Te dice la ultima posicion del caracter que le indiques
console.log(saludo.slice(0,5)) // Encontrar letras Le pasas el indice de donde quieres que empiece y donde termina +1
console.log(saludo.length) // Te dice la longitud del string
console.log(saludo.toLocaleUpperCase()) // Convierte el texto en MAYUSCULAS
console.log(saludo.toLocaleLowerCase()) // convierte tu textoen minusculas

const saludoDividivo = saludo.split(' ')
console.log(saludoDividivo) 
console.log(saludoDividivo[1]) //Secciona el string

const saludoConEspacios = " Hola Mundo "
const saludoSinEspacios = saludoConEspacios.trim() // Quita los espacios al principio y final del string 
console.log(saludoSinEspacios)
console.log(saludoConEspacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', 'k')
console.log(nuevoSaludo)


