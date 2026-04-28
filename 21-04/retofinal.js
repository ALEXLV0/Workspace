let saldo = 500000;

const transacciones = [100000, -200000, -400000, 300000, -100000];

for (let i = 0; i < transacciones.length; i++) {
  let transaccion = transacciones[i];

  if (transaccion > 0) {

    saldo += transaccion;
    console.log(`Depósito: $${transaccion.toLocaleString()}. Saldo actual: $${saldo.toLocaleString()}`);
  } else {

    let retiro = Math.abs(transaccion);
    if (retiro > saldo) {
      console.log("Fondos insuficientes");
    } else {
      saldo -= retiro;
      console.log(`Retiro: $${retiro.toLocaleString()}. Saldo actual: $${saldo.toLocaleString()}`);
    }
  }
}

console.log(`Saldo total final: $${saldo.toLocaleString()}`);
