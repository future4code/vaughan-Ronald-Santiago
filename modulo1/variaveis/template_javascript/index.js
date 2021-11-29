let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b) // Aqui vai ser 10 e 5 pois os dados de 'b' mudaram

a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c) //Será 10, 10, 20 pois o b tem 20 e o a trocou ali o valor pelo dele

let p = prompt("Quantas horas você trabalha por dia?") //Aqui poderíamos usar "horas"
let t = prompt("Quanto você recebe por dia?")          //Aqui poderíamos usar "valor"
alert("Voce recebe ${t/p} por hora")

let nome;
let idade;

console.log(typeof(nome));
console.log(typeof(idade));

nome = prompt("Qual o seu nome ?");
idade =prompt("Qual a sua idade ?");
console.log("Seu nome é: ", nome, "e sua idade é ", idade);
//

let cor1 = prompt ("Você está usando roupa azul hoje ?");
let cor2 = prompt ("Você está usando roupa azul hoje ?");
let cor3 = prompt ("Você está usando roupa azul hoje ?");

console.log("Você está usando roupa azul hoje ?", cor1);
console.log("Você está usando roupa azul hoje ?", cor2);
console.log("Você está usando roupa azul hoje ?", cor3);

let e = 10
let f = 25
let g;

g = e;
e = f;
f = g;

console.log("O novo valor de a é", e) // O novo valor de a é 25
console.log("O novo valor de b é", f)




