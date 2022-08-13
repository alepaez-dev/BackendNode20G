// HTTP
const http = require("http")

// 1 - Se crea un servidor http
// 2 - Poner a ese servidor a escuchar

// PORT

// ENDPOINT
/**
 * Punto final
 * 1 - Metodo -> GET, PATCH, PUT, POST, DELETE
 * 2 - url -> localhost:8080
 * 
 * 5 Endpoints
 * GET -> localhost:8080 -> 
 * POST -> localhost:8080 ->
 * PATCH -> localhost:8080 ->
 * PUT -> localhost:8080 ->
 * DELETE -> localhost:8080 ->
 */


const server = http.createServer((request, response) => {
  // Leer el request
  
  // Deestructure
  const { url, method } = request


  // 1 Nivel -> Metodo
  // 2 Nivel -> Ruta
  // Estructura de datos
  const endpoints = {
    "GET": {
      "/": "Bienvenido estas en GET en HOME",
      "/profile": "Bienvenido estas en GET en el profile",
    },
    "POST": {
      "/": "Bienvenido estas en POST en HOME",
      "/user": "Bienvenido estas en POST en el user"
    },
    "PUT":  {
      "/": "Bienvenido estas en PUT en HOME",
      "/profile": "Bienvenido estas en PUT en el profile"
    },
    "PATCH": {
      "/": "Bienvenido estas en PATCH en HOME",
      "/profile": "Bienvenido estas en PATCH en el profile"
    },
    "DELETE":{
      "/": "Bienvenido estas en DELETe en HOME",
      "/profile": "Bienvenido estas en DELETe en el profile"
    },
  }

  response.write(endpoints[method][url])
  response.end() // ya se finalizo

  // POST -> localhost:8080
  // Bienvenido estas creando

})

// 2 Parametros
// 1 -> PORT
// 2 -> callback -> lo que se va a hacer cuando empieze a escuchar
// BD -> 5432
server.listen(8080, () => {
  console.log("Server listening .....")
})