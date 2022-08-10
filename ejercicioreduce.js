const nombres = [
  "Rodolfo", // 0
  "Araceli", // 1
  "Brisa", // 2
  "Eduardo",
  "Gio", // nopmbre corto
  "Jose", // nombre corto
  "Luis",
  "Marco",
  "Mariana", // nombre largo
  "Pete",
  "Sebastian",
  "Sofia"
]

// Input -> arreglo
// Output
/**
 * {
 *  0: {
 *    name: Rodolfo,
 *    length: 7,
 *    isGreaterThanFour: true
 *  },
 *  1: {
 *    name: Araceli,
 *    length: 7,
 *    isGreaterThanFour: true
 *  },
 * 2:
 * 3:
 * }
 */
// const transformedNames = transformNames(nombres)

const transformNames = (names) => {
  const objetoDeKoders = {} // lo hicieron vacio

  names.forEach((valor, indice) => {
    objetoDeKoders[indice] = {
      name: valor,
      length: valor.length,
      isGreaterThanFour: valor.length > 3
    }
  })

  return objetoDeKoders
}

// const transformedNames = transformNames(nombres)
// console.log("transformedNames", transformedNames)

// spread operator
// Acceder a las variables
// 1 - Por referencia
// 2 - Por valor

const a = 10
let b = a

// Con cualquier cosa, numero, string o booleano

b = b + 5
// console.log("a", a)
// console.log("b", b)

// Con objetos -> Se guarda por referencia
let mentors = ["Alfred", "Ferdi"]
let mentors2 = [...mentors]

// Es leible
// Sigues de inmutabilidad

mentors2.push("Alejandra")

// console.log("mentors", mentors)
// console.log("mentors2", mentors2)

const carro = {
  marca: "Jeep",
  color: "azul"
}


// Por valor
// const carro2 = {...carro} // expandiendo y copiando
// carro2.marca = "Telsa"
// carro.color = "rojo"
// console.log("carro", carro)
// console.log("carro2", carro2)


const transformarNombres = (names) => {
  // 1 -> callback -> accumulador, currentValue, indice, arreglo
  // 2 -> valor inicial del accumulador

  return names.reduce((accumulador, valorActual, indice) => {
    return {
      ...accumulador, // spread operator
      [indice]: {
        name: valorActual,
        length: valorActual.length,
        isGreaterThanFour: valorActual.length > 3
      }
    }
  }, {})
}

const nombresTransformados = transformarNombres(nombres)
console.log("nombresTransformados", nombresTransformados)
