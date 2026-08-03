//DEFINICION DE JAVACRIPT:
/*Es un lenguaje de programacion que permite agregar logica, comportamiento e interactividad
a una aplicacion o pagina web

---------------------------------------------
¿Qué es el DOM?

En pocas palabras: El DOM (Document Object Model o Modelo de Objetos del Documento) es una representación
técnica de una página web que el navegador puede entender.

Piensa en una página web como un árbol genealógico. Cada elemento de la página (un título, un párrafo,
una imagen, un botón) es un "nodo" o "ramita" de ese árbol. El DOM es la estructura que organiza todas esas
ramas para que el navegador sepa cómo están conectadas y qué mostrar.

En esencia, el DOM es la interfaz que permite al JavaScript interactuar con la estructura, el contenido
y el estilo de una página web.

----------------------------------------------
DEFINICION MAS TECNICA:
- lenguaje de programacion interpretado
- dinamicamente tipado
- orientado a objetos basado en prototipos
- multiparadigma
- estandarizado por ECMAScript

----------------------------------------------
- Lenguaje de programacion: es un conjunto de reglas(sintaxis) que usamos para darle instrucciones a una computadora
para que realice tareas, la pc entiende esas intrucciones y las ejecuta

----------------------------------------------
- Interpretado: Significa que el lenguaje se ejecuta mientra va leyendo, sin que tengas que convertilo previamente el programa
a lenguaje maquina
El motor de JavaScript hace algo parecido a esto:
Lee la primera línea
↓
La ejecuta

Lee la segunda
↓
La ejecuta

no espera tener todo el programa para empezar

Lo interpreta un motor de JavaScript, por ejemplo:

V8 (Chrome y Node.js)
SpiderMonkey (Firefox)
JavaScriptCore (Safari)

Estos motores convierten tu código en instrucciones que entiende el procesador.(cpu)

Ya que la pc solo entiende lenguaje binario, osea (0 y 1) -> lenguaje maquina
traducciones:
- compilando -> se convierte todo el codigo de una vez, crea un archivo ejecutable .exe
    - lenguaje de bajo nivel -> mas cercano al lenguaje maquina, requiere menos recursos de procesamiento
    - lenguaje de alto nivel -> mas alejado del lenguaje maquina, requiere mas recursos de procesamiento
    Ejemplos: C, C++, Java, Python, JavaScript, Ruby, etc.
- interpretando -> se convierte linea por linea, no crea un archivo ejecutable
    -lenguaje interpretado -> es un lenguaje de programacion que se ejecuta linea por linea, sin necesidad de convertirlo previamente el programa
    a lenguaje maquina
    Ejemplos: Python, JavaScript, Ruby, etc.

----------------------------------------------
- Dinamicamente tipado:
El tipo de dato se determina durante la ejecucion y puede cambiar

----------------------------------------------
- Orientado a objetos:
¿Qué es un objeto?
Un objeto representa una entidad del mundo real.
Ejemplo:

Un carro.

Tiene características:
color
marca
modelo

Y acciones:
acelerar
frenar
girar

const carro = {
    marca: "Toyota",
    color: "Rojo",

    acelerar() {
        console.log("Acelerando");
    }
};

Aquí:
marca → propiedad
color → propiedad
acelerar → método

La programación orientada a objetos busca organizar el código usando objetos que agrupan datos y comportamientos relacionados.

----------------------------------------------
- Basado en Prototipos:
En muchos lenguajes existen las clases
En Java:
Clase Persona
↓
Carlos
María
Pedro
Todos nacen de esa clase

Javascript no tenia clases tenia prototipos
Un prototipo es simplemente otro objeto del cual puedes heredar propiedades y métodos, a ese objeto se le conoce como Modelo
para otro objeto
El objeto modelo se llama prototipo

El objeto va heredar del prototipo sus caracteristicas (propiedades y metodos)
const persona = {
    especie: "Humano",

    saludar() {
        console.log("Hola");
    }
};

otro objeto:
const carlos = Object.create(persona);
No se copió el objeto.
Lo que hizo JavaScript fue crear esta relación:

persona
   ▲
   │ (prototipo)
   │
carlos (enlace hacia persona)

el tema de propiedades y metodos es lo que JS busca en su prototipo si el objeto no tiene
¿Carlos tiene "especie"?
↓
No.
↓
¿Su prototipo la tiene?
↓
Sí.
↓
La devuelve.

El objeto siempre revisa primero sus propias propiedades. Solo si no las encuentra, busca en su prototipo.
¿Y si tampoco está en el prototipo?
¿Carlos tiene edad?
↓
No.
↓
¿Persona tiene edad?
↓
No.
↓
¿Hay otro prototipo?
↓
No.
↓
undefined

La cadena de prototipos (Prototype Chain): que significa que los prototipos pueden tener prototipos
Object
   ▲
   │
persona
   ▲
   │
carlos



----------------------------------------------
- Multiparadigma:
Es una forma o estilo de programar, es decir una manera de organizar y escribir codigo
Javascript permite varios estilos:

a) Programacion imperativa:
Se enfoca en el "como" hacer algo
Describe paso a paso lo que debe hacer la computadora
Ejemplo:

let suma = 0;

for (let i = 1; i <= 5; i++) {
    suma += i;
}

b) Programación orientada a objetos:
class Persona {

    hablar() {
        console.log("Hola");
    }

}

c) Programación funcional:
Trabajas mucho con funciones.
const numeros = [1,2,3];

const dobles = numeros.map(numero => numero * 2);
No modificas directamente los datos; en su lugar, transformas la información mediante funciones.

- Estandarizado por ECMAScript:
ECMAScript es la especificacion o estandar que define como debe funcionar el lenguaje, osea es como un manual de las
reglas del lenguaje

Indica cosas como:

cómo deben funcionar las variables (let, const, var)
cómo funcionan las funciones
cómo funcionan los objetos
cómo funcionan los arrays
qué métodos existen (map, filter, reduce)
cómo debe comportarse el lenguaje

*/



//Es un lenguaje utilizado para el desarrollo web,
//Es un lenguaje interpretado, o a veces compilado en tiempo de ejecucion (JIT)
//Es un lenguaje de script, que se ejecuta en el navegador, o en el servidor (Node.js)
//Es un lenguaje multiparadigma, que permite varios estilos de programacion.
//Es un lenguaje orientado a objetos, que permite trabajar con objetos y clases.
//Es un lenguaje funcional, que permite trabajar con funciones como ciudadanos de primera clase.
//Es un lenguaje imperativo, que permite trabajar con sentencias y comandos.
//Es un lenguaje declarativo, que permite trabajar con expresiones y valores.
//Es un lenguaje con tipado dinamico, que permite trabajar con variables de diferentes tipos.
//Es un lenguaje con tipado debil, que permite trabajar con variables de diferentes tipos sin necesidad de declararlas.

/* ----------------------------------------------------------------------------------

En javascript no todo es objeto ya que existen los tipos primitivos que no son objetos
let nombre = "Carlos";     // String (primitivo)
let edad = 26;             // Number
let activo = true;         // Boolean
let dato = null;           // Null
let valor;                 // Undefined
let id = Symbol();         // Symbol
let numero = 10n;          // BigInt

pero si nos damos cuentas los primitivos tienes metodos, y como es posible eso
javascript hace automaticamente eso
nombre.toUpperCase();

1. Crea un objeto temporal:
new String("Carlos")
OJO: Tú NO escribiste eso. JavaScript lo hace automáticamente.
Ahora sí existe un objeto.

Ese objeto apunta a String.prototype
String
│
└── prototype
      │
      ▼
{
    toUpperCase()
    toLowerCase()
    slice()
    trim()
}
Entonces el objeto temporal busca ahí.
encuentra
toUpperCase()
La ejecuta.
obtiene: CARLOS
Y luego el objeto temporal desaparece.

let nombre = "Carlos";
como tal ese no tiene la propiedad prototype
Pero esto si:
String -> Es una funcion, y las funciones tienes propiedades, las funciones son objetos
Y las funciones tienen una propiedad:
String.prototype
String (función)
│
└── prototype
        │
        ▼
{

    toUpperCase()

    slice()

    trim()

}

JavaScript crea temporalmente un objeto String (para que puedas usar métodos). Ese objeto tiene esta cadena de prototipos:
Objeto String temporal
↓
String.prototype
↓
Object.prototype
↓
null

eso ocurre con number, booleam

La pregunta seria:
Lo mismo ocurre con ARRAY?
const frutas = ["Manzana", "Pera"];
fruta es un objeto y como objeto entonces si tiene prototype

frutas
↓
Array.prototype
↓
Object.prototype
↓
null


La regla de oro:
1. Buscar en el propio objeto.

↓

2. Si no está, buscar en su prototipo.

↓

3. Si no está, buscar en el prototipo del prototipo.

↓

4. Repetir hasta llegar a null.

↓

5. Si nunca lo encuentra, lanzar un error.

Cada tipo tiene su propio prototipo (Array.prototype, String.prototype, 
Function.prototype, etc.), pero todos terminan heredando de Object.prototype. 
Esa es la razón por la que se dice que todos forman una cadena de prototipos.

En Resumen:
Los tipos primitivos NO son objetos.
Pero JavaScript crea objetos temporales para ejecutar métodos y luego los elimina.

---------------------------------------------
existen DOS conceptos diferentes:
prototype y [[Prototype]] no son lo mismo
- prototype        ← Es una propiedad.
- [[Prototype]]    ← Es un enlace interno.

¿Qué es una función constructora?
Es una funcion cuyo objetivo es crear objetos, no todas las funciones son constructoras
function Persona(nombre) {
    this.nombre = nombre;
}

Cuando una funcion constructora se ejecuta con new, this representa el objeto que JS acaba de crear
si escribo 
new Persona("Juan");
jS crea primero 
{} -> este es el objeto vacio que se acaba de crear, ese objeto sera this
function Persona(nombre, edad) {

    this.nombre = nombre;

    this.edad = edad;

}

Persona.prototype.saludar = function() {

    console.log("Hola, soy " + this.nombre);

};

              Persona

                 │

          prototype

                 │

                 ▼

          {

             saludar()

          }

            ▲         ▲

            │         │

        Carlos      Ana

Carlos y Ana tienen su propio nombre, pero comparten la misma función saludar().
const carlos = new Persona("Carlos", 26);

carlos.saludar();
Ojo tenemso que llamarlo con new
new Persona("Carlos");
Entonces JavaScript la trata como una función constructora, crea un objeto nuevo, 
asigna this a ese objeto y devuelve la instancia.

Pero la forma mas moderna ahora es clasS, eso es despues del ES6
class Persona {

    constructor(nombre, edad) {

        this.nombre = nombre;
        this.edad = edad;

    }

    saludar() {

        console.log("Hola soy " + this.nombre);

    }

}
y se crear el objeto igual:
const carlos = new Persona("Carlos", 26);

carlos.saludar(); // "Hola soy Carlos"
class Persona es simplemente una forma más limpia de escribir funciones constructoras

Entonces el constructor de una clase:
class Persona {

    constructor(nombre) {

        this.nombre = nombre;

    }

}
equivale a esto
function Persona(nombre) {

    this.nombre = nombre;

}

Y un método de una clase:
class Persona {

    saludar() {

    }

}
equivale a esto:
Persona.prototype.saludar = function () {

};

La clase no reemplazó el sistema de prototipos.
Simplemente es una forma más cómoda de escribir código.
Por eso se dice que class es azúcar sintáctico (syntactic sugar).

               Tú escribes

           class Persona {

           }

                  │
                  ▼

      JavaScript sigue utilizando

      Función constructora

              +

      Persona.prototype

              +

      new

              +

      [[Prototype]]

Es decir:
Tú escribes una clase.
JavaScript sigue trabajando con funciones constructoras y prototipos.

Una observacion para entenderlo bien:
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log("Hola");
  }
}

const carlos = new Persona("Carlos");
pasa esto mira:

Persona
  │
  │ propiedad .prototype
  ▼
Persona.prototype
  ▲
  │ enlace interno [[Prototype]]
  │
carlos

Aquí está la diferencia:

Persona.prototype es una propiedad de Persona.
carlos.[[Prototype]] es un enlace interno del objeto carlos.
Ese enlace apunta al mismo objeto que está guardado en Persona.prototype.

Object.getPrototypeOf(carlos) === Persona.prototype -> true
carlos.__proto__ === Persona.prototype -> true // forma antigua

Para que quede claro: 
Osea [[Prototype]] es un enlace interno
const carlos = new Persona("Carlos"); (es el nuevo objeto)

enlace invisible:
carlos
  │
  │ [[Prototype]]
  ▼
Persona.prototype

Ese [[Prototype]] le dice:
"Si no encuentras una propiedad o método en carlos, busca aquí."
carlos
│
├── nombre ✅
│
└── saludar ❌
        │
        ▼
[[Prototype]]
        │
        ▼
Persona.prototype
        │
        └── saludar ✅


Pero acuerdate que esa Persona se vincula con Object:
Cadena de prototipos de carlos
carlos
   ↓
Persona.prototype
   ↓
Object.prototype
   ↓
null

Signfica que:
carlos.[[Prototype]]
        ↓
Persona.prototype

y a su vez:
Persona.prototype.[[Prototype]]
        ↓
Object.prototype

y finalmente:
Object.prototype.[[Prototype]]
        ↓
null

Ahora un ejemplo Real:

class Persona(nombre) {
    constructor(nombre) {
        this.nombre =  nombre
    }

    saludar() {
        console.log("saludar")
    }
}

const carlos = new Persona("Carlos")
carlos.saludar();
entonces busca asi:
carlos
↓
¿saludar?
NO

Persona.prototype
↓
¿saludar?
SÍ ✅

Pero si pongo esto:
carlos.toString();

Se bucas asi 
carlos
↓
¿toString?
NO

Persona.prototype
↓
¿toString?
NO

Object.prototype
↓
¿toString?
SÍ ✅


*/ 