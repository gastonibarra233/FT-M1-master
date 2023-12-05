"use strict";

function BinarioADecimal(num) {
  let decimal = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] == "1") {
      let posicion = num.length - i - 1;
      decimal += Math.pow(2, posicion);
    }
  }
  return decimal;
}
//Otras opciones
//return parseInt(num, 2);

function DecimalABinario(num) {
  if (num === 0) {
    return "0";
  }
  let binario = "";
  while (num > 0) {
    let residuo = num % 2;
    binario = residuo + binario;
    num = Math.floor(num / 2);
  }
  return binario;
}
//Otras opciones
//return num.toString(2);

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
