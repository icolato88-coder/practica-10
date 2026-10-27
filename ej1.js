const readline = require('readline');

// Configuración de la interfaz de lectura desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Función recursiva para la cuenta regresiva
 * @param {number} n - Número actual de la cuenta regresiva
 */
function cuentaRegresiva(n) {
  // Imprime el número actual
  console.log(n);

  // Caso base: cuando llegamos a 1
  if (n === 1) {
    console.log("¡El tiempo ha terminado!");
    rl.close(); // Cerramos la interfaz de readline al finalizar
    return;
  }

  // Paso recursivo: llamamos a la función con el número decrementado
  cuentaRegresiva(n - 1);
}

// Solicitamos la entrada al usuario
rl.question('Ingresa un número entero positivo mayor a cero: ', (entrada) => {
  // Convertimos la entrada a un número
  const numero = Number(entrada);

  // Validación: Comprobar que sea un número entero y mayor a 0
  if (!Number.isInteger(numero) || numero <= 0) {
    console.log("Error: Debes ingresar un número entero positivo mayor a cero.");
    rl.close();
    return;
  }

  // Si pasa la validación, iniciamos la cuenta regresiva recursiva
  cuentaRegresiva(numero);
});