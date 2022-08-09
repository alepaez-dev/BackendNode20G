// 1 - Funcion que recoiba de parametro un nombre del
// process.argv, y si existe que me imprima “Bienvenido y el nombre”
// SI NO, imprimir “Afuera de aqui”

const nombre = process.argv[2]

const printName = (nombre) => {
  if(nombre) { 
    console.log(`Bienvenido ${nombre}`)
    return // Salte
  }
  console.log("Afuera de aqui")
}

printName(nombre)