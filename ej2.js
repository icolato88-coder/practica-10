const readline = require('readline');

// Configuración de la interfaz de lectura desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Función recursiva con retorno para calcular la sumatoria acumulada
 * @param {number} numero - Número actual
 * @returns {number} La suma acumulada desde 1 hasta el número
 */
function calcularSumatoria(numero) {
  // Requerimiento 2: Definir claramente el caso base cuando el número sea igual a 1
  if (numero === 1) {
    return 1;
  }

  // Requerimiento 1: Utilizar return sumando el número actual con el resultado de la función con numero - 1
  return numero + calcularSumatoria(numero - 1);
}

// Solicitamos un número entero positivo N al usuario
rl.question('Ingresa un número entero positivo N: ', (entrada) => {
  const n = Number(entrada);

  // Validación para asegurar que sea un entero positivo mayor a 0
  if (!Number.isInteger(n) || n <= 0) {
    console.log("Error: Debes ingresar un número entero positivo válido.");
    rl.close();
    return;
  }

  // Calculamos la sumatoria usando la función recursiva
  const resultado = calcularSumatoria(n);

  // Mostramos el resultado final en la consola
  console.log(`La suma total de los números desde 1 hasta ${n} es: ${resultado}`);

  // Cerramos la interfaz de lectura
  rl.close();
});