// 1. Comentarios:
// Perminten agregar notas en el codigo, facilitando su comprension

// Varias lineas:
/*

*/

// En linea:
//

// -------------------------------------------------------

// 2. Variables:
// Estructuras que permiten almacenar datos en memoria, pueden contener datos de cualquier tipo
// Son dinamicas: No es necesario declarar el tipo de dato, se infiere en tiempo de ejecucion
// Son sensibles a mayusculas y minusculas: nombre y Nombre son variables diferentes
// No se pueden nombrar con numeros

const nombre = "Juan";

let edad = 25;
console.log(nombre, edad);

// ----------------Tipos de variables------------------
// Se van diferenciar segun su alcance y mutabilidad
// var: (obsoleto)declara una variable que tiene un alcance global, pero se comporta como de bloque (de funcion) y puede ser reasignada, es decir que se puede cambiar su valor
// let: permite crear variables con ambito(alcance) de bloque (que significa que solo esta disponible donde se declara) (de funcion en versiones antiguas), y puede ser reasignada, es decir que se puede cambiar su valor
// const: permite crear variables con ambito(alcance) de bloque (que significa que solo esta disponible donde se declara) (de funcion en versiones antiguas), no se puede reasignar, es decir que no se puede cambiar su valor

// ----------------Tipos de datos------------------
// Primitivos
let candena = "Hola mundo"; //String: Secuencia de caracteres
let numero = 42 //Number: Numeros enteros o decimales
let esVerdadero = true //Boolean: Valores logicos
let nulo = null; //Null: Ausencia de valor intencional
let indefinido = undefined; //Undefined: Sin valor asignado
let simbolo = Symbol("simbolo") //Symbol: Identificador unico

//Referenciales:
let objeto = { nombre: "Juan", edad: 30 }; // Object
let array = [1, 2, 3, 4, 5];                // Array
let funcion = function () {                   // Function
    console.log("Hola desde la función");
};


// 3. ¿Cómo lo maneja JavaScript exactamente en la memoria?
// A nivel técnico, lo que almacena la variable depende de qué tipo de dato estés guardando:

// Datos Primitivos (Números, Textos, Booleanos, Null, Undefined):
// La variable almacena el valor directamente.
// let nombre = "Carlos"; // La variable guarda directamente el dato "Carlos"

// Objetos y Arreglos (Arrays, Objetos, Funciones): La variable no guarda todo el objeto
// directamente, sino que almacena una referencia (la dirección en la memoria) donde está
// guardado ese conjunto de datos.
// let usuario = {
//     nombre: "Carlos",
//     rol: "Administrador"
// };
// 'usuario' almacena la referencia/dirección de memoria donde vive esa información.

// En resumen:
// La computadora y JavaScript ven y almacenan DATOS (números, cadenas de texto, referencias de memoria).
// Tú como programador creas variables para darle contexto y sentido a esos datos, convirtiéndolos en INFORMACIÓN útil para tu aplicación.