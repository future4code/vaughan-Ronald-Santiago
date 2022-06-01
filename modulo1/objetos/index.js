const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])   //Aqui nessa parte vai primeiramente trazer o nome, pois foi o primeiro criado dentro de filme
console.log(filme.elenco[filme.elenco.length - 1]) //Olha, aqui como está chamando o -1 com o length imagino ser o ano 2000
console.log(filme.transmissoesHoje[2])  //Aqui aparecerá "Globo", "14h" pois é a terceira na posição

//
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //Aqui vai aparecer todas as características do cachorro
console.log(gato)     //Aqui vai aparecer "Juba"
console.log(tartaruga) // Aqui vai aparecer o a e o

// O que ocorreu nesse código foi uma cópia do objeto cachorro






//AQUI ABAIXO SÃO OS CÓDIGOS DE ESCRITA

const pessoa = {
    nome: "Ronald",
    apelidos: ["Roni", "Ronaldo", "Rô"]
}

  function chamadorPessoa(pessoa){
      console.log("Eu sou ", pessoa.nome, "m mas pode me chamar de", pessoa.apelidos)


}
chamadorPessoa(pessoa)

//EXERCICIO 2
const Copiapessoa = {...pessoa,
    apelidos: ["Aloha", "Alohai", "Alohão"]


}

chamadorPessoa(Copiapessoa)

    const usuario1 = {
        nome: "Paulo",
        idade: 23,
        profissao: "Programador"
    }

    const usuario2 = {
        nome: "Gustavo",
        idade: 45,
        profissao: "Eletricista"
    }

    function chamadorUsuario(usuario1, usuario2){
       console.log( usuario1)
       console.log(usuario2)
     
    }

    chamadorUsuario(usuario1, usuario2)

    //EXERCICIO 3
    carrinho = []

    const fruta1 = {
        nome: "Maçã",
        disponibilidade: true,



    }

    const fruta2 = {
        nome: "Banana",
        disponibilidade: true,
        


    }

    const fruta3 = {
        nome: "Uva",
        disponibilidade: true,
        


    }

    function RecebedordeFruta(fruta){
        carrinho.push(fruta)
        console.log(carrinho)

    }

    RecebedordeFruta(fruta1)
    RecebedordeFruta(fruta2)
    RecebedordeFruta(fruta3)