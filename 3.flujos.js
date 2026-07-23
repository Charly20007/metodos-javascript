// Estructura de control de Flujo en Js

/*Condicionales:
Las condicionales son estructuras de control que permiten ejecutar 
un bloque de codigo dependiendo si se cumple
una condicion o no.

las condiciones deben producir los 2 valores booleanos
true, false

1. Condicionales Simples: (if)
Evalua una condicion y si es true ejecuta un bloque de codigo
Estructura:
if (condicion) {
    // codigo a ejecutar si la condicion es verdadera
}

Ejemplo:
if (edad >= 18) {
    console.log("Eres mayor de edad");
}

2. Condicionales dobles: (if-else)
Elige entre dos bloques de codigo dependiendo el valor evaluado en la condicion
if (condicion) {
    // Se ejecuta si es true
} else {
    // Se ejecuta si es false
}

3. Condicionales multiples: (if..else if..else)
Se utiliza cuando existen mas de dos posibilidades
Estructura:
if (condicion1) {
    // Se ejecuta si condicion1 es verdadera
} else if (condicion2) {
    // Se ejecuta si condicion1 es falsa y condicion2 es verdadera
} else if (condicion3) {
    // Se ejecuta si condicion1 y condicion2 son falsas y condicion3 es verdadera
} else {
    // Se ejecuta si todas las condiciones son falsas
}

4. Condicional Anidada:
Es colocar un If dentro de otro if
Se utiliza cuando la segunda condicion se evalua luego de que la primera condicion se cumpla solamente

if (primeraCondicion) {
    if (segundaCondicion) {
        // Se ejecuta si ambas condiciones se cumplen
    }
}

let edad = 20;
let tieneEntrada = true;

if (edad >= 18) {
    console.log("Eres mayor de edad");

    if (tieneEntrada === true) {
        console.log("Puedes ingresar al concierto");
    }
}

en muchos casos se puede simplicar utilizando &&:
if (edad >= 18 && tieneEntrada) {
    console.log("Puedes ingresar");
}

5. Seleccion multiple: (switch)
Es una estructura condicional que compara un valor con varios casos
Es útil cuando una variable puede tener distintos valores exactos, como días, estados, roles u opciones de un menú.

switch (valor) {
    case primerValor:
        // Código
        break;

    case segundoValor:
        // Código
        break;

    default:
        // Código si ningún caso coincide
}

break: detiene el switch despues de encontrar la coincidencia, sin el, el switch ejecutara todos los casos que le sigan
default: se ejecuta si ningun caso coincide

6. Condicional abreviada, operador ternario: (?)
El operador ternario es la forma abreviada de escribir if..else
como operador devuelve un valor, y ese valor se puede asignar a una varible
su estructura es la siguiente:

let operadorTernario = (condicion) ? valorSiVerdadero : valorSiFalso

Ejemplo:
let edad = 20;
let resultado = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
console.log(resultado);


*/
