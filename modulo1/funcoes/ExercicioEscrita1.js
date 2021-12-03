function minhaFuncao(variavel) {
	return variavel * 5           //Aqui o valor recebido pela função vai ser multiplicado
}

console.log(minhaFuncao(2))           //Aqui vai ser 10 pois 5 x 2 é esse valor
console.log(minhaFuncao(10))          //Aqui vai aparecer 50 devido a ser 10 x 5
//Se não tivesse o console.log eu acredito que não apareceria nada, já que não tem algo pra mostrar no console

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//Esse programa aí vai justamente trazer algo em maiusculo, no caso CENOURA é bom pra vista