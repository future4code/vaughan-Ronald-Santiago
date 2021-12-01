//Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

const nomeUsuario = prompt("Qual o seu nome ?");
const email = prompt ("Qual teu email ?");
console.log("O email ", email, "foi cadastrado com sucesso. Seja bem vindo()", nomeUsuario);

 //Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

 const comida = ["yakissoba", "lasanha", "frango ", "Pure", "coxinha"];
console.log("Essas são as minhas comidas favoritas:  ", comida[0]);
console.log("Essas são as minhas comidas favoritas: ", comida[1]);
console.log("Essas são as minhas comidas favoritas: ", comida[2]);
console.log("Essas são as minhas comidas favoritas: ", comida[3]);
console.log("Essas são as minhas comidas favoritas: ", comida[4]);

comidaFavorita = prompt("Qual a sua comida favorita ? ");
comidaFavorita === comida[2];
console.log("Sua comida favorita é: ", comidaFavorita);

//Atividade 3

const listadeTarefas = [];
listadeTarefas[0] = prompt (" Qual é a sua primeira tarefa do dia ?");
listadeTarefas[1] = prompt ("Qual a sua segunda tarefa ? ");
listadeTarefas[2] = prompt ("Qual a sua teerceira tarefa ?");
console.log(listadeTarefas[0]);
console.log(listadeTarefas[1]);
console.log(listadeTarefas[2]);

const indice = prompt("A partir de agora, diga qual dessas tarefas você já fez: de 0 a 2");
console.log(indice);
const indiceAtulizado = `O número escolhido foi ${listadeTarefas[indice]}`
const removerNumero = listadeTarefas.splice(indiceAtulizado -1);
console.log(removerNumero.length);






