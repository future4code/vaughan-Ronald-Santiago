//b) Crie um programa que receba seu nome e sua idade. 
//Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:



const nome = process.argv[2]
const idade = Number(process.argv[3])
const num1 = Number(process.argv[4])
const num2 = Number(process.argv.slice(5))

console.log(`Olá,${nome}, sua idade é  ${idade}`)

//Exercio 1c- Altere a idade para que aumente 7 anos
console.log(`Olá, ${nome} !Sua idade é ${idade}, em sete anos você terá ${idade+7}`)

//Exercicio 2- Retorne uma string com um resultado
// console.log("Resposta", num1+num2)
// console.log(`Resposta: ${num1-num2}`)