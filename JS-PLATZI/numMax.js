//declaramos el array

let numbers = [2,3,6,1,8,4];

//variable que mide/almacena el tamaño del array

let length = numbers.length;

//variable que almacena el número más grande

let maxNumber = 0;

//ciclo que inicia en la posición 0 del array, lo recorre por completo y, cuando se encuentra un número mayor al "maxNumber", lo sustituye

for (let i = 0; i < length; i++) {
  if(maxNumber < numbers[i]) {
    maxNumber = numbers[i];
  }
}

//Imprimimos en consola el resultado

console.log("El número más alto es " + maxNumber);
 