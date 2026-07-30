// 0.2 Hoisting: (elevacion)
// Es el compartamiento en la cual el motor js "sube" registra las declaraciones de variables y funciones
// antes de ejecutar el codigo

// Como se ejecuta Javascript en un programa

/* Elmotor de Javascript lee el codigo de arriba hacia abajo
siendo almacenado en la memoria ram y ejecutado paso a paso

1.-El motor de Js crea un Contexto de Ejecucion para cada programa que se ejecuta.
El contexto de ejecucion es como una caja donde se almacena todo lo necesario para ejecutar el codigo.

2.-Dentro del contexto de ejecucion, el motor crea dos cosas importantes:
    a)Contexto de creacion:
    - lee todo el archivo
    -Crear el entorno de variables (Memory Heap)
    -Crear el entorno de ejecucion (Call Stack)
    -Crear el contexto global
    - no ejecuta ninguna instruccion

    b)Contexto de ejecucion:
    -Ejecutar el codigo de arriba hacia abajo
    -asigna valores a las varibles
    -llama funciones
    -evalua condiciones
    -Ejecuta el codigo y crea el contexto global
    
    Ejemplo:
    let nombre = "Carlos"; //declaracion
    console.log(nombre);   //uso

    Cuando el motor de Js ve la declaracion de una variable, la reserva en memoria
    y la asocia con la varible



*/