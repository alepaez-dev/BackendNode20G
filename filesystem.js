const fs = require("fs")

// fs.appendFile("index.js", "\nconsole.log('Que onda')", "utf8", (err) => {
//   if(err) {
//     console.log("err", err)
//     return
//   }

//   console.log("Tu archivo fue actualizado con exito")
// })

// Eliminar un archivo

/**
 * Ejercicio 1
 * 1 - Leer los archivos de un directorio e imprimirlos.
 * 
 * 
 * Ejercicio 2
 * Con callbacks
 * 1 - Leer los archivos de un directorio y eliminarlos.
 * - Tienen que validar que tenga archivos, si no imprimir un console.log de no hay archivos
 */

/**
 * Asincronidad -> Cuando varias se estan haciendo al mismo tiempo, y la que sale primero esa va
 *
 * Sincronidad -> Que se esta haciendo una cosa despues de la otra
 */

// Leer directorio con callback
// fs.readdir("directorio1", "utf-8", (err, files) => {
//   if(err) throw err
//   console.log("files", files)
// })

/**
 * Hacer una carpeta dentro de otra
 * Y eliminar el contenido de toda la carpeta de adentro
 * En pseudo-codigo
 * readdir -> leer directorio
 * rmdir -> eliminar directoio
 * unlink -> eliminar un archivo
 * fs.statSync(path[, options]) -> para ver los stats de un archivo o directorio 
 * (tip: para ver si algo es directorio)
 */

/**
 * Pseudocodigo del ejercicio1
 * 
 * 1 - Leer el directorio -> arreglo de archivos => [text1, text2, text3]
 * 2 - Ciclar mis archivos
 * 3 - En cada ciclo, voy a eliminarlo
 */

const path = "dir1"
fs.readdir(path, "utf-8", (err, files) => {
  if(err) throw err

  // Validar que cuanto no tenga archivos me imprima que no hay archivos.
  if(files.length === 0) {
    console.log("No hay archivos")
    return
  }
  // La callback es una funcion
  // A las funciones le podemos en los paramet=ros

  // Continuar con que si tenemos archivos
  files.forEach(file => {
    fs.unlink(`${path}/${file}`, (err) => {
      if(err) throw err

      console.log(`La eliminacion del ${file} fue exitosa`)
    })
  })

})

