const nome = 'Daniel';
const idade = 24
const anoNascimento = 1997
const cidade = "Porto Alegre"

// const apresentação = "Oi, meu nome é " + nome + "!";

const apresentacao = `Oi, meu nome é ${nome}! Eu nasci em ${anoNascimento} e tenho ${idade} anos. Atualmente, eu moro em ${cidade}.`

const pedido = `Vou querer ${idade >= 18 ? 'uma garrafa de cerveja' : 'uma lata de refri'}`

console.log(apresentacao);
console.log(pedido);