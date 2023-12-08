// 1. Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

// 2. Notacion cientifica
const cientifico = 5e3

// 3. Infinito y NaN
const infinito = Infinity
const noEsUnNumero = NaN

// Operaciones Aritmeticas

// 1. Suma, Resta, Multiplicacion y Division 
const suma = 2+3
const resta = 6-2
const multiplicaciob = 6/2
const division = 16/2

// Modulo y Potencia
const modulo = 15 % 8
const Exponenciacion = 2 ** 3

// Precision 
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1)) 
// Con .toFixed le indicamos cuantos digitos queremos despues del punto

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(`${raizCuadrada} raiz Cuadrada, ${valorAbsoluto} valor Absoluto, ${aleatorio} aleatorio`)
