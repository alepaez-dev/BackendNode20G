const fs = require("fs")

// CRUD -> base de datos -> sistema archivos
// json
// mongodb

// Create
// Read
// Actualizar
// Eliminar

// fs.writeFile("text1.txt", "Archivo creado desde node", "utf8", (err) => {
//   // Logica negativa
//   if(err) {
//     console.log("err", err)
//     return //Salte
//   }

//   // Si no, todo lo demas
//   console.log("El archivo fue creado exito")
// })

// fs.readFile("ejercicios.js", "utf-8", (err, data) => {
//   // Logica negativa
//   if(err) throw err

//   // Continuamos con nuestra vida
//   console.log(data)
// })
// Put -> reemplaza
// Patch -> Actualiza

fs.appendFile("text1.txt", "\nEsto es NUEVO", "utf8", (err) => {
  if(err) {
    console.log("err", err)
    return
  }

  console.log("Tu archivo fue actualizado con exito")
})