const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt (
    prompt("Adivia el numero secreto entre el 1 al 10")
    )

    console.log(`Este es el numero con el que juegas ${numeroJugador}`)

    if (numeroJugador === numeroSecreto) {
    console.log("Ganaste")
    }else if (numeroJugador < numeroSecreto){
    console.log("El numero es muy bajo")
    } else {
    console.log("Buen intento, suerte para la proxima")
    }

    