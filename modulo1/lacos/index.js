//Exercicio 1 - Esse código vai dar um valor de 10
// Ele está fazendo uma contagem enquanto o número for menor que 5 e depois ele pega esse mesmo valor e soma dando 10

//EXERCICIO 2 - Vai ser impresso 19, 21, 23, 25, 27, 30
//VocÊ poderia usar o [] com o número do indice

//Exercicio3 - Não consegui achar a resposta





let numeroAnimais = Number(prompt("Quantos animais você tem ?"))
let animais;
let adicionadorAnimais =0;
let nomesAnimais = [];

if(numeroAnimais == 0){
    console.log("Que pena ! Você pode ter um animal !")

}
else {
    while( adicionadorAnimais <= numeroAnimais){
        
        animais = prompt("Digite o nome deles: ")
        nomesAnimais.push(animais)

        adicionadorAnimais++;
      


    }
}

console.log(nomesAnimais)

//EXERCICIO 2
let numeros = [1, 2, 3, 4, 5]
function ImprimeValor(){
    console.log(numeros)

}

ImprimeValor()

function ValorDivisel(){
    let contador = 1;
    while(contador < numeros[contador] )
     console.log(numeros[contador]*2)



}

ValorDivisel()




