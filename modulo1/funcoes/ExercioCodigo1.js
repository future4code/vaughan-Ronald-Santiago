function sobreMim(){
    console.log("Eu sou Ronald, tenho 24 anos e curto muito neurociências e saber sobre o futuro")
}

sobreMim()

function Informacoes(nome, idade, cidade, profissao){
    console.log("INFORMACOES")
    
    nome = prompt("Qual o seu nome ?");
    idade = Number(prompt("Qual a tua idade ? "));
    cidade = prompt("Qual a sua cidade ?");
    profissao = prompt("Qual a tua profissão ?");
    console.log("Seu nome é", nome , " sua idade ", idade , " cidade ", cidade, "profissão ", profissao);


}

Informacoes()

function numeros(numero1, numero2){
    numero1 = Number(prompt("Digite o primeiro número: "));
    numero2 = Number(prompt("Digite o segundo número: "));
    
    console.log("A soma é: ", numero1+numero2)



}

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
function MaiorouMenor(valor1, valor2, maioroumenor){
    console.log("EXERCICIO DO MAIOR OU MENOR")
    valor1 = Number(prompt("Digite o primeiro valor: "));
    valor2 = Number(prompt("Digite o segundo valor: "));
    maioroumenor = valor1 >= valor2 || valor1 === valor2 === true;

    console.log(maioroumenor)

    
    


}

MaiorouMenor()

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function ParImpar(num1, resultado ){
    console.log("PAR OU IMPAR")
    num1 = Number(prompt("Digite o número escolhido: "));

    resultado = num1%2 === true
    console.log(resultado);



}

ParImpar()

function Maiuscula(mensagem){
    
    console.log("MAIUSCULA")
    mensagem = prompt("Digite a mensagem: ");
    console.log(mensagem.toUpperCase());
    console.log(mensagem.length);


}

Maiuscula()

function somar(somar1, somar2){
   console.log("A soma é: ", somar1+somar2);

}

function subtrair(subtrair1, subtrair2){
    console.log("A subtração é: ", subtrair1-subtrair2);
 
 }

 function dividir(dividir1, dividir2){
    console.log("A subtração é: ", dividir1/dividir2);
 
 }

 function multiplicar(multipli1, multipli2){
    console.log("A multiplicação é: ", multipli1*multipli2);

 }

 primeiroNumero = Number(prompt("Digite o primeiro número: "));
 segundoNumero = Number(prompt("Digite o segundo número: "));
 console.log("CALCULADORA ");
 console.log("Os números inseridos foram: ", primeiroNumero, " e ", segundoNumero);
 console.log(somar(primeiroNumero,segundoNumero));
 console.log(subtrair(primeiroNumero, segundoNumero));
 console.log(dividir(primeiroNumero, segundoNumero));
 console.log(multiplicar(primeiroNumero, segundoNumero));
 
 
 