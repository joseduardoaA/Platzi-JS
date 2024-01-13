let cantidadRestante 
let apartar = []
let billetes = [500, 200, 100]
let cantidad = prompt("Ingresa la cantidad")
if (cantidad >= 500){
    apartar = billetes[0]
    cantidadRestante = cantidad - apartar
    if(cantidadRestante == 0){
        console.log(apartar)
    } else{
        while(cantidadRestante>=500 ) {
            apartar = apartar + billetes[0]
            cantidadRestante = cantidad - apartar
            console.log(apartar)}
    }
} 




// else if(cantidad>=200){
//     apartar = billetes[1]
//     cantidadRestante = cantidad - apartar
//     if (cantidadRestante == 0){
//         console.log(apartar)
//     }
//     else if(cantidadRestante == 200){

//     }
// }


if (cantidadRestante == 0){
    console.log(apartar)
}

else{
    // console.log(cantidadRestante)
}