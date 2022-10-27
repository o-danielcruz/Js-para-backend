let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

// null x undefined: os operadores de comparação podem, ou não, diferenciar null e undefined. A diferença, no entanto é que null pode iniciar uma variavel, enquanto undefined é o 'valor' de uma variavel que nao foi inicializada. 

console.log(null == undefined); // true
console.log(null === undefined); // false

// a diferença entre == e === é que o primeiro compara apenas o valor e o segundo compara o valor e tipo da variavel.