const personalizedMessage = () => "goodbye everybody"

function Rocket (name, ownMessage) {
    this.name = name
    this.launchMessage =  ownMessage
this.launchMessage = function () {
    console.log('Launch ready');
}
}

const falcone9Rocket = new Rocket('Falcone 9', personalizedMessage)
const falconeKennyRocket = new Rocket('Falcone Kenny', personalizedMessage)
console.log(falcone9Rocket.name);
console.log(falcone9Rocket.launchMessage());

const rocketWithArrowFunction = (name, ownMessage) => ({
    name: name, 
    launchMessage: ownMessage
})

const personalizedMessageForArrowFunction = () => "Buen despegue"
const falcone9Rocket1 = rocketWithArrowFunction("Falcone 9", personalizedMessageForArrowFunction)
console.group(falcone9Rocket1.name);
console.group(falcone9Rocket1.launchMessage());


/* Funciones Constructoras:

Utilizadas para crear objetos con new.
Utilizan this para asignar propiedades al nuevo objeto.
function Persona(nombre, edad) { this.nombre = nombre; this.edad = edad; } const persona1 = new Persona('Juan', 25);  

Funciones Recursivas:
Llamadas a sí mismas durante la ejecución.
Útiles para problemas que se pueden dividir en subproblemas más pequeños.
function factorial(n) { if (n === 0 || n === 1) { return 1; } else { return n * factorial(n - 1); } } 

Métodos de Objeto:
Funciones que son propiedades de objetos y se llaman métodos cuando se invocan en el contexto de ese objeto.
const objeto = { metodo: function() { console.log('Hola desde el método'); } }; objeto.metodo(); 

Funciones Asincrónicas:
Utilizadas para manejar operaciones asíncronas con callbacks, Promesas o Async/Await.
async function fetchData() { const response = await fetch('<https://api.example.com/data>'); const data = await response.json(); console.log(data); }*/
