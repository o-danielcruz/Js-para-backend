// let x = " ";
// console.log(x);
// x = "oi";

// // 1) Declara a função

function imprimeTexto(texto){
    console.log(texto);
}

// // 2) executa a função (1 ou + vezes)

// imprimeTexto ("Fala com o pai!");
// imprimeTexto ("Vamos a la playa");

// // tres formas de escrever funções

// function soma(){
//     const resultado = 2 + 2;
//     return resultado;
// }

// imprimeTexto (soma());

// // Ordem dos parâmetros

function nomeIdade (nome, idade){
    return `meu nome é ${nome} e eu tenho ${idade} anos.`
}

console.log(nomeIdade('joao', 15));

// // funções dentro de funções

function soma (numero1, numero2){
    return numero1 + numero2;
}

function multiplica (numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(5,4), soma(3,2)));
