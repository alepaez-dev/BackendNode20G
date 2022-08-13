// HTTP
const express = require("express")
const app = express()


// Empezabamos a escuchar

app.get("/", (request, response) => {
  response.write("Hola Bienvenido al get de Home")
  response.end()
})

app.get("/profile", (request, response) => {
  response.write("Hola Bienvenido al get de Profile")
  response.end()
})

app.listen("8080", () => {
  console.log("Servidor escuchando")
})

/**
 * Hacer el CRUD con express
 */


