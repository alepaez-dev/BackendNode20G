const fs = require("fs")

// CRUD -> base de datos -> sistema archivos


// Create
// Read

fs.writeFile("text1.txt", "Archivo creado desde node", "utf8", (err) => {
  // Logica negativa
  if(err) {
    console.log("err", err)
    return //Salte
  }

  // Si no, todo lo demas
  console.log("El archivo fue creado exito")
})

fs.readFile("ejercicios.js", "utf-8", (err, data) => {
  // Logica negativa
  if(err) throw err

  // Continuamos con nuestra vida
  console.log(data)
})