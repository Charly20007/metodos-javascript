/*
¿Qué es el DOM? (Document Object Model)
---------------------------------------
Representacion estructurada de un documento HTML (interfaz de programacion)
Crea una representacion en memoria del documento HTML que puede ser manipulada por JS
Estructura en forma de arbol donde cada etiqueta, atributo o texto es un nodo
Ejemplo de HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Mi página</title>
</head>
<body>
  <h1>Título</h1>
  <p>Párrafo</p>
</body>
</html>

Estructura del DOM:

        document
           │
        html
         │
   ┌─────┴─────┐
 head          body
  │             │
title         titulo h1
  │             │
"Mi página"    "Título"
              │
           parrafo p
              │
           "Párrafo"

Cada uno de estos es un nodo del DOM.

¿Cómo interactúa JavaScript?

Imagina que quieres cambiar el título. Con JavaScript puedes:

*/