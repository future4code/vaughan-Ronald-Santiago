
//Resposta EXERCICIO 1
// O número tem resto divisivel por 2, se verdadeiro o bloco abaixo é executado
 //Caso não seja divisivel é essa mensagem que irá aparecer



//RESPOSTA EXERCICIO 2
//O código  serve para ver qual o tipo de fruta que a pessoa vai escolher e dizer o preço dela
//Se for maçã a mensagem vai ser 2.25
//Se retirasse o break seria 5 5.5 pois sem o break o código vai continuar até o fim

//RESPOSTA EXERCICIO 3 
//Essa primeira linha converte o que receber para number
//Caso o usuário digite 10 vai ir 10 e -1 a mesma coisa







//Programa que pergunta a idade dele

let idade = Number(prompt("Qual a sua idade ?"));
if(idade >= 18){
    console.log("Você já é maior de idade ! Já pode sim dirigir ! ")

} else{
    console.log("Você ainda não pode dirigir pois é menor de idade !")
}

//PROGRAMA QUE VERIFICA EM QUAL TURNO O ALUNO ESTÁ
let turno = prompt("Em qual turno você está ? Digite 'M' para Matutino, V para Vespertino ou N para Noturno");
if(turno == "M"){
    console.log("Bom dia !")
}
else if(turno == "V"){
    console.log("Boa tarde !")
}

else{
    console.log("Boa noite !")
}

//Agora utilizando aqui o switch
let turno2 = prompt("Digite o turno escolhido com M, V ou N");
switch(turno2){
    case "M" : {
        console.log("Bom dia !")
        break;

    }
    case "V": {
        console.log("Boa tarde !")
        break;
    }

    case "N": {
        console.log("Boa noite !")
        break;
    }

    default: {
        console.log("Informação errada.")
        break;
    }
}

//Programa que pergunta o ingresso e o genêro do filme
let ingresso = Number( prompt("Qual o valor do ingresso ?"));
let genero =  prompt("Qual o genêro do filme ?")
console.log("O valor do ingresso é: ", ingresso);
console.log("O genêro é o: ", genero);

if(ingresso < 15 && genero == "fantasia"){
    console.log(" Bom filme ! ")
}

else{
    console.log("Escolha outro filme !")
}


