let idade = Number (prompt ("Qual a sua idade ?"));  //const anoNascimento = Number(prompt("Digite seu ano de nascimento"))
let idadeAmigo = Number (prompt ("Qual tua idade mano ?"));

console.log("Sua idade é maior que a de seu amigo ?", idade > idadeAmigo == true);


//EXERCICIO 2

let num1 = Number(prompt("insira o número par: "));
console.log("O resto desse número por 2 é: ", num1%2); //O que percebi até agora é que sendo par dá 0 e sendo impar é 1

//Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
let ano = Number(prompt("Digite aqui sua idade em anos: "));
console.log("A sua idade em meses é: ", ano/12);
console.log("A sua idade em dias é: ", ano/365);
console.log("A sua idade em horas é: ", ano/24);

//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

numero1 = Number(prompt("Digite um número aqui: "));
numero2 = Number(prompt ("Digite o segundo número : "));

console.log("O primeiro número é maior que o segundo ?", numero1 >numero2 == true);
console.log("O primeiro número é igual ao segundo ?", numero1 === numero2 == true);
console.log("O primeiro número é divisivel pelo segundo ?", numero1%numero2 == true);
console.log("O segundo número é divisivel pelo primeiro ?", numero2%numero1 == true);