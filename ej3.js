const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let totalProductos = 0;
let productoActual = 1;
let acumuladorPrecios = 0;

function pedirPrecioProducto() {
  if (productoActual > totalProductos) {
    mostrarResumenCompra();
    return;
  }

  rl.question(`Ingrese el precio del producto ${productoActual} de ${totalProductos}: `, (entrada) => {
    const precio = Number(entrada);

    if (isNaN(precio) || precio < 0) {
      console.log("Error: Ingrese un precio válido mayor o igual a 0.");
      pedirPrecioProducto();
      return;
    }

    acumuladorPrecios += precio;
    productoActual++;
    pedirPrecioProducto();
  });
}

function mostrarResumenCompra() {
  const subtotal = acumuladorPrecios;
  const iva = subtotal * 0.13;
  const totalPagar = subtotal + iva;

  console.log("\nRESUMEN DE LA COMPRA");
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`IVA (13%): $${iva.toFixed(2)}`);
  console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);

  rl.close();
}

rl.question('¿Cuántos productos se van a registrar? ', (entrada) => {
  const cantidad = Number(entrada);

  if (!Number.isInteger(cantidad) || cantidad <= 0) {
    console.log("Error: Debe ingresar un número entero positivo de productos.");
    rl.close();
    return;
  }

  totalProductos = cantidad;
  pedirPrecioProducto();
});