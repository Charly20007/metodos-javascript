// Manipulacion de Arrays

// FOREACH
// Itera sobre cada elemento del array

const numeros = [10, 20, 20, 30]

numeros.forEach(function (numero) {
    console.log(numero)
})

numeros.forEach((numero, index) => console.log(index, numero))

// FILTER
// Crea un nuevo array con los elementos que cumplan la condicion

const numerosFiltrados = numeros.filter(numero => numero > 20)
console.log(numerosFiltrados)

// MAP
// Crea un nuevo array con los resultados de aplicar una funcion a cada elemento
const numerosMapeados = numeros.map(numero => numero * 2)
console.log(numerosMapeados)

// PUSH
// Agrega uno o mas elementos al final del array
numeros.push(40)
console.log(numeros)

// UNSHIFT
// Agrega uno o mas elementos al inicio del array
numeros.unshift(5)
console.log(numeros)

// SHIFT
// Elimina el primer elemento del array
numeros.shift()
console.log(numeros)

// SPLICE
// Elimina elementos del array
numeros.splice(1, 2)
console.log(numeros)

// UNSHIFT
// Agrega uno o mas elementos al inicio del array
numeros.unshift(5)
console.log(numeros)

// SHIFT
// Elimina el primer elemento del array
numeros.shift()
console.log(numeros)

