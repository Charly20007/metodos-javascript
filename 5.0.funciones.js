// 5. Funciones en Javascript:
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
La función es un valor y estamos guardándolo dentro de sumar.

Las funciones son valores?
- guardarse en variables;
- mandarse como argumento;
- devolverse desde otras funciones;
- guardarse en objetos;
- guardarse en arrays.

-------------------------------------------------


*/