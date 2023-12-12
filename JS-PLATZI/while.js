// Inicializamos la variable de suma
let suma = 0;

// Solicitamos números al usuario hasta que se ingresa un número negativo
let numero = parseFloat(prompt("Ingrese un número (ingrese un número negativo para terminar):"));

while (numero >= 0) {
  // Sumamos el número ingresado a la suma total
  suma += numero;

  // Solicitamos otro número
  numero = parseFloat(prompt("Ingrese otro número (ingrese un número negativo para terminar):"));
}

// Mostramos la suma total fuera del bucle
console.log(`La suma de los números ingresados es: ${suma}`);