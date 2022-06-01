//Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.
//EXERCICIO ESCRITO1 

function AlturaLarguraRetangulo(altura, largura){
    altura = Number(prompt("Digite a sua altura: "));
    largura = Number(prompt("Digite a sua largura: "));
    console.log("A área do retãngulo é: ", altura*largura);

}

AlturaLarguraRetangulo(12, 3)

//Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.
//EXERCICIO ESCRITO2

function IdadeAtual(anoAtual, anoNascimento){
anoAtual = Number(prompt("Digite o seu ano atual: "));
anoNascimento = Number(prompt("Digite o seu ano de nascimento: "))
console.log("A sua idade é: ", anoAtual-anoNascimento)

}

//O IMC pode ser calculado de acordo com a fórmula a seguir:
//EXERCIO ESCRITO3

function IMC(peso, altura){
    return peso/(altura*altura);

}

//EXERCIO4
//Escreva uma função que pede ao usuário seu nome, sua idade e seu email (nessa ordem), e imprime no console uma mensagem como a seguinte:

function Dados(nome, idade, email){
    nome = prompt("Qual o seu nome ? ");
    idade = Number(prompt("Qual a sua idade: "));
    email = prompt("Qual o seu email ?");
    console.log(`Meu nome é ${nome}, minha idade é ${idade} e meu email é: ${email}`)
}

//Escreva uma função que pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores.
//

function Cores(){
   let cor1 = prompt("Qual a sua cor favorita 1 ?");
   let cor2 = prompt("Qual a sua cor favorita 2 ?");
   let cor3 = prompt("Qual a sua cor favorita 3 ?");

  let ArrayCores = [];
   ArrayCores.push(cor1);
   ArrayCores.push(cor2);
   ArrayCores.push(cor3);

   console.log(ArrayCores);

}

//Escreva uma função que recebe uma string e retorna ela em letra maiúscula.
//

function RecebeString(){
 let string = prompt("Digite a string: ");
 return string.toUpperCase()

}

function ValorTeatro(custo, valor){
   custo = prompt("Qual o custo do espétaculo?");
   valor = prompt("Qual o valor de cada ingressso ?");
   let total = custo/valor;
   return total;

}

//Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.
//

function RecebeDuasStrings(string1, string2){


   
    return string1.length === string2.length

    

}

//Escreva uma função que recebe um array e retorna o primeiro elemento.
//

function Recebearray(){
  let array1 = [];

  return array1[0];


}

function ReceberUltimoElemento(){
 let array2 = []

 return array2[array2.length-1]

}

//Escreva uma função que recebe um array e retorna um array com o primeiro e o último elemento trocados.
//

function PrimeiroUltimo(){
let array3 = []

const primeiro = array3[0]
const ultimo = array3[array3.length-1]


}

function DuasStrings(string1, string2){
  return string1.toLowerCase() === string2.toLowerCase();

}

function RG(){
  let anoAtual = prompt("Qual o ano atual ?");
  let anoNascimento = prompt("Qual o ano de nascimento ?");
  let anoEmissao = prompt("Qual o ano de emissão ? ");
  let idade = anoAtual-anoNascimento;
  let carteira = anoEmissao-anoNascimento;

 let var1 = idade >20 && carteira >= 5;
 let var2 = idade >=20 && idade <= 50 && carteira >=  10;
 let var3 = idade > 50 && carteira >= 15;
 console.log(var1 || var2 || var3)


}