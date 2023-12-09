const owner = "Lucy"
const address = "street 123"

function dogGreeting (owner, address) {
    console.log(`Hi I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

const newHouse = {
    dogName: 'Coconut'
}

dogGreeting.call(newHouse, owner, address)

/* Si tenemos muchos parametros los podemos colocar en un Array y pasarselos con el metodo .apply
El metodo recibe primero el contexto de ejecucuion y despues los parametros, en este caso el Array de todos los parametros 
*/ 
const valoresNecesarios = [owner, address]
dogGreeting.apply(newHouse, valoresNecesarios)