// // CONVERSÃO IMPLÍCITA

const numero = 456;
const numeroString = '456'

console.log (numero === numeroString); // comparacao de valor e tipo
console.log (numero == numeroString); // comparacao apenas de valor
console.log (numero + numeroString); // concatenacao

// Number() \ funções de conversão
// String() /

console.log (numero + Number(numeroString));
console.log (String(numero) === numeroString);

// // CONVERSÃO EXPLÍCITA