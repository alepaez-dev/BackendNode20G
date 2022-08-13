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
  
  console.log("method", method)
  console.log("url", url)
  // GET -> localhost:8080
  // Bienvenido estas en el get, estas leyendo
  if(method === "GET" && url === "/") {
    response.write("Bienvenido estas en el get, en home estas leyendo")
  } else if(method === "POST" && url === "/") {
    response.write("Bienvenido estas en el POST en la ruta /")
  } else if (method === "PATCH" && url === "/") {
    response.write("Bienvenido estas en el PATCH en la ruta /")
  } else if (method === "PUT" && url === "/") {
    response.write("Bienvenido estas en el PUT en la ruta /")
  } else if (method === "DELETE" && url === "/") {
    response.write("Bienvenido estas en el DELETE en la ruta /")
  } else if(method === "GET" && url === "/profile") {
    response.write("Bienvenido estas en el GET en la ruta /profile")
  }
  else {
    response.write("Esta ruta no existe")
  }

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