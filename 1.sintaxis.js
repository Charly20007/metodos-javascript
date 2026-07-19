// 1. Comentarios:
// Perminten agregar notas en el codigo, facilitando su comprension

// Varias lineas:
/*
sasasa
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
// Se van diferenciar segun su alcance (scope) y mutabilidad

// alcance: Indica en que parte del codigo esta disponible la variable
// mutabilidad: Indica si la variable puede ser reasignada

// a. var: (obsoleto)declara una variable que tiene un alcance de funcion o global si se declara fuera de la funcion, puede ser
// redeclarada y reasignada

// b. let: permite declarar variables con ambito(alcance) de  bloque({}) , permite reasignacion , y la redeclaracion 
// depende del ambito

// c. const: permite declarar variables con ambito(alcance) de bloque, 
// no se puede reasignar, es decir que no se puede cambiar su valor, despues de su creacion.

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

/*
Variable

edad
 │
 ▼
25
*/

// Objetos y Arreglos (Arrays, Objetos, Funciones): La variable no guarda todo el objeto
// directamente, sino que almacena una referencia (la dirección en la memoria) donde está
// guardado ese conjunto de datos.
// let usuario = {
//     nombre: "Carlos",
//     rol: "Administrador"
// };
// 'usuario' almacena la referencia/dirección de memoria donde vive esa información.
// el objeto y sus propiedades estan almancenados en otro lugar de la memoria

/*
Variable

usuario
   │
   ▼
Referencia
   │
   ▼
Objeto
┌────────────────────┐
│ nombre: "Carlos"   │
│ rol: "Administrador"│
└────────────────────┘
*/


// En resumen:
// La computadora y JavaScript ven y almacenan DATOS (números, cadenas de texto, referencias de memoria).
// Tú como programador creas variables para darle contexto y sentido a esos datos, convirtiéndolos en INFORMACIÓN útil para tu aplicación.