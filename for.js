const alumnos = ['carlos', 'ana', 'juan']

for (let i = 0; i < alumnos.length; i++) {
    console.log(i, alumnos[i])
}

for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i] === 'ana') {
        continue  //break detiene el bucle
    }
    console.log(i, alumnos[i])
}

for (let alumno of alumnos) {
    console.log("valor: ", alumno)
}

for (let alumno in alumnos) {
    console.log("indice: ", alumno)
}