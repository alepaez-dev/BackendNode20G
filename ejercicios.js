const nombres = [
  "Rodolfo",
  "Araceli",
  "Brisa",
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

/**
 * Construir una funcion que separe los nombres largos de los cortos 
 * un nombre largo es aquel que supera los 4 caracteres de longitud.
 * Input: ["Rodolfo" ...]
 * Destructurando
 * Output: const [nombresCortos, nombresLargos] = funcion(nombres) // retornando esto
 */

const separateNames = (names) => {
  const largerNames = []
  const shortedNames = []

  names.forEach((name) => {
    if(name.length < 4) {
      shortedNames.push(name)
    } else {
      largerNames.push(name)
    }
  })

  return [shortedNames, largerNames]
}

// List
// Arreglo


// Lista de koders
// Arreglo de objetos
// Koder
// Objeto
const [nombresCortos, nombresLargos] = separateNames(nombres)
console.log("nombres cortos", nombresCortos)
console.log("nombres largos", nombresLargos)

// Ejercicio 2

// Hacer una funcion que se llame transformarNombres reciba como parametro un array de nombres y regresar un objeto de objetos que contenga el nombre, el length del nombre y si es mayor a 4 o no
// Input: ["Ale", "Mariana", "Adrian"]...
// Output:
// {
// 	0: {
// 		name: "Ale", -> string
// 		length: 3, -> numero
// 		isGreaterThanFour: true -> booleano
// 	}
// }

// reduce -> cambiar datos