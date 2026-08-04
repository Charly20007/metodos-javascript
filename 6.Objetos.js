/*
Diferencia de ambos como estan organizados
Objeto = "¿Qué características tiene esta cosa?", por proiedades
Array = "¿Qué elementos tengo en esta lista?", por posiciones

a)Objetos en Javascript:
------------------------
Colecciones de propiedades con nombre y valor, acceso a propiedades usando punto y corchete
cada valor esta asociado a una clave 
let persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
      console.log("Hola, soy " + this.nombre);
  }
};

console.log(persona.nombre); 
persona.saludar();           


Manipulacion de objetos :
persona.direccion = "Calle Falsa 123";  Agregar propiedad
persona.edad = 31;                      Modificar propiedad
delete persona.direccion;               Eliminar propiedad


--------------------------------------------------------
b) Arrays en Javascript:
------------------------
Son estructura de datos que almacenan listas ordenadas de elementos permitiendo acceso mediante indices.

const frutas = ["Manzana", "Pera", "Naranja"];
Cada elemento tiene una posicion llamada indice
Índice       0          1          2
             ↓          ↓          ↓
frutas = ["Manzana",  "Pera",  "Naranja"]

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