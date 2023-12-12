let canasta = ["manzana", "naranja", "uva", "sandia"];

for (fruta of canasta) {
    console.log(fruta)
}
/*
El for es el primer ciclo de todos los for, el for normal, este se usa para recorrer cualquier cosa que sea iterable como un array, un string. Te das cuenta porque vas a ver una relación simple: una posición (indice) y un valor(un elemento en un array, un caracter en u string). Y tenés una manera de ponerle una condición de stop al bucle.

El forEach es similar al ciclo for, pero es un método de los arrays, tiene una sintaxis mucho más acotada y explícita, genera una función que se repetirá por cada uno de los elementos que existan, por ejemplo en una lista. Una diferencia notable es que no necesitás ponerle una condición de cierre, cuando se le acaban lod items a recorrer en su estructura interna ya tiene la instrucción de terminar el ciclo.

El for of , pensalo como una evolución del for, que se usa en objetos iterables (arrays, strings), es decir, una lista de algo. Y se ejecutará mientras halle algo que iterar, cuando ya pasó por todos los elementos de la lista hace un break y termina.

Esta es una diferencia de cómo se guarda la información: los array y string tienen items (elementos), y los objetos usan propiedad-valor.

El for in se usa en objetos enumerables para iterar en las propiedades y valores (no se usa en arrays y ni en strings). Puedes usarlos asociando los métodos de object, según lo que necesites...

Conclusión: los for son como un juego de llaves Allen, por ahí usas más una medida, pero mejor es tener el juego a disposición para usar lo que es mejor en cada caso. Saludos!
*/