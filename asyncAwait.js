/**
 * Va a cambiar la forma de ejecutar la forma de ejecutarse nuestras promesas
 * Async Await
 * 
 * Async -> Cuando vamos a hacer una funcion asyncrona
 * Await -> Va a ESPERAR una promesas. -> 5 segundos
 * 
 * Reglas:
 * Async va en la declaracion de la funcion, se esta declarando como asincrona
 * Await va dentro de esa funcion que se declaro como asincrona
 * 
 * No puedo usar await sin el async.
 * 
 * Sintaxis:
 */


// Sintaxis
// Arrow function

// const funcionAsincrona = async () => {

//   // Todo lo de adentro va a ser asincrono
//   // Que se puede usar Await aqui adentro
//   // Que el retorno de esta funcion va a ser una promesa
// }

// // Funcion normal
// async function asincronidadFuncion() {
//   // Todo lo de adentro va a ser asincrono
//   // Que se puede usar Await aqui adentro
//   // Que el retorno de esta funcion va a ser una promesa
// }

const koder = {
  seDieronInformes: false,
  seEntrevisto: false,
  sePago: false,
  seInscribio: false,
};

const darInformes = (koderAInformar) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          koderAInformar.seDieronInformes = true;

          if (!koderAInformar.seDieronInformes) {
              reject("No se pudo dar informes");
          }

          // Si se resuelve
          resolve(koderAInformar);
      }, 3000);
  });
};

const entrevistar = (koderAEntrevistar) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          koderAEntrevistar.seEntrevisto = true;

          if (!koderAEntrevistar.seEntrevisto) {
              reject("No se pudo entrevistar");
          }

          // Si se resuelve
          resolve(koderAEntrevistar);
      }, 3000);
  });
};

const pagar = (koderAPagar) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          koderAPagar.sePago = true;

          if (!koderAPagar.sePago) {
              reject("No se pudo pagar");
          }

          // Si se resuelve
          resolve(koderAPagar);
      }, 3000);
  });
};

const inscribir = (koderAInscribir) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          koderAInscribir.seInscribio = true;

          if (!koderAInscribir.seInscribio) {
              reject("No se pudo inscribir");
          }

          // Si se resuelve
          resolve(koderAInscribir);
      }, 3000);
  });
};


// Async - Await
const recibiendoInformes = async () => {
  const koderInformar = await darInformes({...koder})

  // Awaits
  // Se esta esperando
  console.log("koderInformar", koderInformar)
  
}

recibiendoInformes()