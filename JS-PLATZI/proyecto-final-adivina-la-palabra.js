let palabraOculta = "javascript";
let intentos = 3;



function verificarSuposicion (suposicion, palabraOculta){
    if(suposicion.toLowerCase() === palabraOculta){
    return true;
    }
    return false

}

function jugarAdivinaLaPalabra() {
    alert("Bienvenido a Adivina la palabra oculta")
    alert("Tienes 3 intentos para adivinar la palabra")
    alert("-Pista- La palabra oculta es un lenguaje de programacion ");
    while(intentos>0){
        let suposicion = prompt("Adivina la palabra")
        if(verificarSuposicion (suposicion, palabraOculta)) {
            alert("¡Correcto, adivinaste la palabra!")
            break;
        } else {
            intentos--;
            if(intentos>0){
                alert(`La palabra que haz ingresado es incorrecta te quedan ${intentos} intentos restantes`)
            } else{
                alert(`Te quedaste sin intentos, la palabra ocuta era ${palabraOculta}`)
            }
        }
    }
}
jugarAdivinaLaPalabra()