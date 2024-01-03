// Definición de una función llamada realizarTarea que toma un argumento llamado 'dia'
function realizarTarea(dia) {
    // Inicia la declaración switch, que evaluará el valor de 'dia'
    switch (dia) {
        // Si 'dia' es igual a cualquiera de estos casos ('lunes', 'martes', 'miércoles', 'jueves', 'viernes')
        case 'lunes':
        case 'martes':
        case 'miércoles':
        case 'jueves':
        case 'viernes':
            // Imprime en la consola que es un día laboral y se están realizando tareas laborales
            console.log('Es un día laboral. Realizando tareas laborales.');
            // Sale del bloque switch
            break;

        // Si 'dia' es igual a 'sábado' o 'domingo'
        case 'sábado':
        case 'domingo':
            // Imprime en la consola que es fin de semana y se está disfrutando del tiempo libre
            console.log('Es fin de semana. Disfrutando del tiempo libre.');
            // Sale del bloque switch
            break;

        // Si 'dia' no coincide con ninguno de los casos anteriores
        default:
            // Imprime en la consola que el día no es reconocido y sugiere verificar la entrada
            console.log('Día no reconocido. Verifica la entrada.');
    }
}

// Ejemplos de uso de la función realizarTarea con diferentes días como argumentos
realizarTarea('lunes');     // Día laboral
realizarTarea('sábado');    // Fin de semana
realizarTarea('domingo');   // Fin de semana
realizarTarea('miércoles'); // Día laboral
realizarTarea('julio');     // Día no reconocido

// Mi intento

const pla = "playera"
switch (pla){
    case "sudadera":
        console.log("Las sudaderas cuestan $300")
        break
    case "pantalones":
        console.log("Los pantalones cuestan $460")
        break
    case "playeras":
        console.log("Las playeras cuestan $100")
        break;
    default:
        console.log("Lo sentimos, no contamos con ese articulo en nuestra tienda")
}

switch (edad = 18) {
    case true: console.log("Eres mayor de edad")
    break
    case false: console.log("Falso")
    break
}


"Se solicita número del 1 al 4"

switch (2){

case 1:
 console.log("El número ingresado es 1")
 break
case 2:
 console.log("El número ingresado es 2")
 break
case 3:
 console.log("El número ingresado es 3")
 break
case 4:
 console.log("El número ingresado es 4")
 break
default: 
 console.log("El número ingresado no está en el rango 1-4")
break
}