// 5. Funciones en Javascript: (en javascript las funciones son valores return , si no hay undefined)
// ---------------------------
/*
Son bloques de "codigo reutilizables" que realizan una tarea especifica, 
se ejecuta cuando es invocada

a)Division de la funciones:
Varias formas de crear funciones:
-Declaración de función (Function Declaration)
-Expresión de función (Function Expression)
-Funciones flecha (Arrow Functions)
-Funciones anónimas
-Funciones inmediatamente invocadas (IIFE)
-Métodos (funciones dentro de objetos)

-----------------------------------------
b)Sintaxis:
function saludar(nombre) {
    console.log("Hola " + nombre);
    return nombre
}

Si no hay return devuelve undefined

nombre: parametro, datos que la funcion espera recibir, osea informacion que recibe la funcion
- ojo el paramentro es esa varible que esta ahi que dice nombre
- argumento: seria el valor que se le asigna a la varibale nombre
- una funcion puede recibir varios parametros

- Parametro vs Argumento:
function saludar(nombre) {
    // 'nombre' es un parametro
    console.log("Hola " + nombre);
}

saludar("Ana");
// '"Ana"' es un argumento

- return permite que la funcion devuelva un valor

Ojo el console.log no es lo mismo que return
Cuando aparece return la funcion termina
function verificarEdad(edad) {
  if (edad >= 18) {
    return "Mayor de edad";
  }

  return "Menor de edad";
}

-------------------------------------------------
c) Declaracion de la funcion: (Function Declaration)
Forma clasica 
function(parametro1, parametro2) {
    // Codigo
    return valor;
}
Caracterisitica principal que Javascript las carga antes de ejecutar el programa(hosting)

saludar("Carlos");

function saludar(nombre) {
    console.log("Hola " + nombre);
}
aunque la llamada aparezca antes de la declaracion de la funcion, no hay problema
por el hosting(es decir es como si la funcion siempre estuviera definida antes de ser llamada)

-------------------------------------------------
d) Expresiones de funcion: (Function Expression)
Son funciones sin nombres que se asignan a una varible

const nombreFuncion = function(parametro1, parametro2) {
    // Codigo
    return valor;
}
ejemplo:
const multiplicar = function(a, b) {
  return a * b;
};
console.log(multiplicar(2, 3)); // Imprime: 6

Conceptualmente:
const saludar = function () {
  return "Hola";
};

saludar
   │
   │ referencia
   ↓
┌──────────────────────┐
│ Function             │
│                      │
│ nombre => ...        │
└──────────────────────┘

la varible saludar contiene una referencia  a la funcion
por eso se puede hacer:
const otraFuncion = saludar;
otraFuncion("Carlos");

saludar ────────┐
                ↓
           function() {
              return "Hola"
           }
                ↑
otraFuncion ────┘
ambas hacen referencia a la misma funcion
No hay hosting en las expresiones de función

const sumar = function (...) {...}
La función devuelve siempre un valor y estamos guardándolo dentro de sumar.

Las funciones son valores?
- guardarse en variables;
- mandarse como argumento;
- devolverse desde otras funciones;
- guardarse en objetos;
- guardarse en arrays.

Nota:
console.log()
      ↓
mostrar algo

return
      ↓
devolver algo


-------------------------------------------------

e)  Arrow Function:
function sumar(a, b) {
    return a + b;
}
Puede escribirse como:
const sumar = (a, b) => {
    return a + b;
};

Simplificandolo:
- solo hay un return
const sumar = (a, b) => {
    return a + b;
};
entonces:
const sumar = (a, b) => a + b;

- Con un parametro
const saludar = (nombre) => {
    return "Hola " + nombre;
};
Se puede quitar el parentesis del parametro
const saludar = nombre => {
    return "Hola " + nombre;
};
Incluso si solo hay un return y una sola instruccion
const saludar = nombre => "Hola " + nombre;

- Con cero parametros
const saludar = () => {
    return "Hola";
};
Incluso si solo hay un return y una sola instruccion
const saludar = () => "Hola";

------------------------------------
Nota: Parametros por defecto
function saludar(nombre = "Invitado") {
    return "Hola " + nombre;
}

-------------------------------------
f) Scope: (alcance de la variables)

Scope: 
Alcance de una variable(donde existe o donde se puede usar)

- Global
- Local (Function Scope)
- Bloque (Block Scope)

FUERA

function prueba() {

    ┌────────────────────┐
    │ Scope de prueba    │
    │                    │
    │ const nombre       │
    │                    │
    └────────────────────┘

}

console.log(nombre) ❌

---------------------------------------
g) Callback:
Un callback es una función que pasamos como argumento a otra función.
function procesar(callback) {

    console.log("Procesando...");

    callback();
}

function terminar() {
    console.log("Terminado");
}

procesar(terminar);
y no 
procesar(terminar());

terminar
   │
   │ función
   ↓
procesar(terminar)
          │
          ↓
      callback()
          │
          ↓
      "Terminado"
-------------------------------------
h) Diferencia entre declaracion de funcion, arrow function, expresion de funcion:
Sí. Las 3 sirven para crear funciones, pero cambian principalmente en hoisting, this, sintaxis y uso típico.
// 1. Declaración de función
function sumar(a, b) {
  return a + b;
}

// 2. Expresión de función
const sumar2 = function(a, b) {
  return a + b;
};

// 3. Función flecha
const sumar3 = (a, b) => {
  return a + b;
};

console.log(sumar(2, 3));  // 5
console.log(sumar2(2, 3)); // 5
console.log(sumar3(2, 3)); // 5

- Declaracion de funcion:
Puede llamarla antes de escribirla
saludar();

function saludar() {
  console.log("Hola");
}
# gracias al hoisting, javascript prepara la funcion antes de ejecutar el codigo
# por eso se puede llamar antes de definirla

- Expresion de funcion:
No puede llamarla antes de escribirla

saludar2(); ❌

const saludar2 = function() {
  console.log("Hola");
};
# no hay hoisting en las expresiones de funcion

- Funciones flecha:
Misma regla que las expresiones de función:

saludar3(); ❌

const saludar3 = () => {
  console.log("Hola");
};

* Diferencia importante: this:

1. Primero: solo existen estas dos categorías para entender this
A. Funciones creadas con function

Puede ser declaración:
function saludar() {
  console.log(this.nombre);
}

o expresion:
const saludar = function () {
  console.log(this.nombre);
};
las dos usan function, y respecto a this siguen las mismas reglas.

B. Funciones flecha:

const saludar = () => {
  console.log(this.nombre);
};
uso distinto del this

ENTONCES:
persona.saludar();
JavaScript ve que estás ejecutando una función mediante un objeto:
persona.saludar()
^^^^^^^
   │
   └── objeto desde el cual llamaste la función

Como la función fue creada con function:
function saludar() {
  console.log(this.nombre);
}
para esa ejecución JavaScript hace que:
this === persona
this.nombre == persona.nombre

Entonces ¿qué this utiliza la arrow?:
La arrow utiliza el this que existía en el lugar donde fue creada.
Eso se llama this léxico.
La arrow no obtiene un this nuevo al ejecutarse. Hereda el this del contexto exterior.

const persona = {
  nombre: "Carlos",

  ejecutar: function () {

    console.log(this.nombre);

    const saludar = () => {
      console.log(this.nombre);
    };

    saludar();
  }
};

persona.ejecutar();

ejecutar: function () {

  // this → persona

  const saludar = () => {
    console.log(this.nombre);
  };

}
  La arrow dice:
"Yo no creo/determino un this nuevo. Voy a usar el que ya existe afuera."

persona.ejecutar()
       │
       ▼
┌──────────────────────────────┐
│ function () {                │
│                              │
│ this → persona               │
│                              │
│    const saludar = () => {   │
│                              │
│       this → persona         │
│              ↑               │
│              │               │
│       lo hereda de afuera    │
│                              │
│    }                         │
│                              │
└──────────────────────────────┘

Diferencia:
┌───────────────────────────────────────┐
│        function () {}                 │
├───────────────────────────────────────┤
│                                       │
│ Su `this` depende de CÓMO             │
│ llamamos la función.                  │
│                                       │
│ persona.saludar()                     │
│ ↑                                     │
│ this                                  │
│                                       │
└───────────────────────────────────────┘


┌───────────────────────────────────────┐
│              () => {}                 │
├───────────────────────────────────────┤
│                                       │
│ NO obtiene `this` por cómo            │
│ la llamamos.                          │
│                                       │
│ Usa el `this` del contexto            │
│ donde fue creada.                     │
│                                       │
└───────────────────────────────────────┘

Por eos las arrows son buenísimas dentro de otras funciones
const persona = {
  nombre: "Carlos",

  amigos: ["Juan", "Pedro"],

  mostrarAmigos: function () {

    this.amigos.forEach((amigo) => {
      console.log(this.nombre, amigo);
    });

  }
};

La frase que debes memorizar

function pregunta:

"¿Cómo me llamaron?" → de ahí puede salir mi this.

Arrow => pregunta:

"¿Qué this había donde me crearon?" → uso ese mismo.

Ese es el corazón de la diferencia entre function y => respecto a this.

*/
