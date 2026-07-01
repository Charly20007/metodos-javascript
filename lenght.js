// Metodos lenght
// longitud de cadena de texto y cantidad de elementos de un array

const numeros = [10, 20, 20, 30]

const numeroNoRepetidos = new Set(numeros)
console.log(numeroNoRepetidos)//Set(3) { 10, 20, 30 }
const convertiloArray = [...numeroNoRepetidos]
console.log(convertiloArray.length)

console.log(numeros.length)

const name = "carlos"

console.log(name.length)
