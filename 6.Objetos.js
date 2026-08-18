/*
Diferencia de ambos como estan organizados
Objeto = "¿Qué características tiene esta cosa?", por proiedades
Array = "¿Qué elementos tengo en esta lista?", por posiciones

a)Objetos en Javascript:
------------------------
Sirve para agrupar infomracion relacionada
Colecciones de propiedades con nombre y valor, acceso a propiedades usando punto y corchete
cada valor esta asociado a una clave 
let persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
      console.log("Hola, soy " + this.nombre);
  }
};

Dentro del objeto tenemos pares
propiedad: valor

console.log(persona.nombre); 
persona.saludar();           


Manipulacion de objetos :
persona.direccion = "Calle Falsa 123";  Agregar propiedad
persona.edad = 31;                      Modificar propiedad
delete persona.direccion;               Eliminar propiedad

Los objeto pueden guardar cualquier valor
incluso puede guardar otro objeto
const persona = {
  nombre: "Carlos",

  direccion: {
    ciudad: "Lima",
    distrito: "Miraflores"
  }
};

un objeto tambien puede guardar una funcion
const persona = {
  nombre: "Carlos",

  saludar: function () {
    console.log("Hola");
  }
};

8. Otra forma de acceder a propiedades: []
const persona = {
  nombre: "Carlos",
  edad: 25
};

console.log(persona["nombre"]);

--------------------------------------------------------
b) Arrays en Javascript:
------------------------
Son estructura de datos que almacenan listas ordenadas de elementos permitiendo acceso mediante indices.

const frutas = ["Manzana", "Pera", "Naranja"];
Cada elemento tiene una posicion llamada indice
Índice       0          1          2
             ↓          ↓          ↓
frutas = ["Manzana",  "Pera",  "Naranja"]

frutas

índice       valor

  0       "manzana"
  1       "pera"
  2       "naranja"

Modificar un array
const frutas = ["Manzana", "Pera", "Naranja"];

// Modificar Pera por Mango
frutas[1] = "Mango";

// Agregar Uva al final
frutas.push("Uva");

// Eliminar Naranja
frutas.pop();

accedes mediante el indice:
frutas[0] // "Manzana"
frutas[1] // "Pera"
frutas[2] // "Naranja"

Además, los arrays tienen propiedades y métodos, igual que otros objetos:
frutas.length
frutas.push("Uva")
frutas.pop()
frutas.map(...)
frutas.filter(...)

*/
