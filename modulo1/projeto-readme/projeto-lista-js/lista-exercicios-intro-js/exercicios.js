// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  altura = Number(prompt("Qual a altura ?"))
  largura = Number(prompt("Qual a largura ?"));

  console.log((altura*largura));

}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Qual o ano atual ?"));
  anoNascimento = Number(prompt("Qual o ano de seu nascimento ?"));
  console.log(anoAtual-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  IMC = peso/(altura*altura);

  return IMC;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Qual o seu nome ?");
  idade = Number(prompt("Qual a sua idade ?"));
  email = prompt("Qual o seu email ?");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1) {
  // implemente sua lógica aqui
  
  cor1 = prompt(" Qual a primeira cor ? ");
  cor2 = prompt(" Qual a segunda cor ? ");
  cor3 = prompt(" Qual a terceira cor ? ");
  console.log(cor1, " ", cor2, " ", cor3);
 ;


}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = prompt("Digite aqui a frase: ");
  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  custo = (Number(prompt("Qual o custo ? ")));
  valorIngresso = (Number(prompt("Qual o valor do ingresso ?")));
  return custo/valorIngresso ;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1 = prompt("Digite a primeira frase: ");
  string2 = prompt("Digite o segundo número: ")

  return string1  === string2 === true || string1 != string2 === false;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  array = [1,2,3];
  array[0] = prompt("Digite aqui: ")

  console.log(array[0]);


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}