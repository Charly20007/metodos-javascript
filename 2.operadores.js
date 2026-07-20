// Operadores:
/* Un operador es un simbolo o conjuntos de simbolos que realiza una operacion
sobre uno o mas operandos y devuelve un valor (un tipo de dato)*/
/* Ese resultado puede ser un número, un booleano, un string, etc*/

// 1.- Operadores aritmeticos:
/* Son operadores que realizacion operaciones matematicas entre uno o mas operandos
que deben ser numeros*/

// Unario: Operador que realiza una operacion sobre un solo operando
// Binario: Operador que realiza una operacion sobre dos operandos
// Ternario: Operador que realiza una operacion sobre tres operandos

/*
// Unarios:
++
--

/* ejemplo

let numero = 1;
console.log(++numero) // 2
console.log(--numero) // 1
*/

/*
// Binarios:
+
-
*
/
%
*/

// 2.- Operadores de asignacion: (=)
/* Su funcion es asignar un valor a una variable. Por ejemplo:

let edad = 25;
let numero = 10;

numero = 20;

let puntos = 10;

puntos += 5;
puntos = puntos + 5;

*/


// 3.- Operadores de Comparacion:
/* Son operadores que comparan dos valores y siempre devuelve un dato booleano

10<5 --- false
10>5 --- true
10==5 --- false
10!=5 --- true
10<=5 --- false
10>=5 --- true

Que diferencia hay entre == y ===?
- ==: Compara solo el valor
Si los tipos son diferentes, JavaScript intenta convertirlos.
5 == "5" -> true

- === : compara el valor como el tipo:
5 === "5" --> false
*/

// 4.- Operadores Logicos:
/* Son operadores que trabajan con expresiones logicas (boleanos) permitiendo
combinar o negar expresiones y devuelven un resultado logico

- Operador AND (&&):
¿las condiciones son verdaderas? -> Devuelve verdadero
edad >= 18 && tieneLicencia

- Operador OR (||):
¿alguna de las condiciones es verdadera? -> Devuelve verdadero
edad >= 18 || tieneLicencia

- Operador NOT (!):
¿es lo contrario? -> Devuelve verdadero si es falso y falso si es verdadero
!edad >= 18

*/




