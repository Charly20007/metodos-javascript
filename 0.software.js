// Computadora:
//a. Disco SSD: Almacena los datos de forma permanente, asi se apague la PC, datos. En el
//se almacena el sistema operativo, los programas y los archivos de usuario.

//Pequena explicacion de como funciona, por ejemplo con el sistema operativo
//Cuando la pc esta apagada no hay nada en la memoria RAM, cuando se prende la pc
//es donde el firmware de la placa madre (BIOS o UEFI) entra en accion y se encarga de
//cargar el sistema operativo en la memoria RAM, para que el CPu pueda seguir la instrucciones
//y ejecutar el sistema operativo
/*
Flujo completo:
1. Enciendes la PC

      ↓

2. BIOS/UEFI inicia

      ↓

3. Lee el sistema operativo del SSD

SSD ─────────► RAM

      ↓

4. La CPU ejecuta el sistema operativo

RAM ─────────► CPU

      ↓

5. Abres un programa

SSD ─────────► RAM ─────────► CPU
*/

// ---------------------------------------------------

// b. RAM (Random Access Memory):
//Es el lugar donde se almacenan los datos y las instrucciones de los programas que se estan
// utilizando en ese momento para que el cpu pueda trabajar con ellos


// c. CPU:
// Ejecuta las instrucciones que estan en la RAM, debe tener los datos y la instrucciones
//necesarios para poder trabajar    