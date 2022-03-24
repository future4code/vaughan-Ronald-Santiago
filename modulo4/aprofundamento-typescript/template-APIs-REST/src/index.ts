

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

let person: {
    nome: string,
    idade: number,
    corFavorita: string
}

enum corArcoIris {
    VIOLETA = "Violeta",
    ANIL = "Anil", 
    AZUL = "Azul", 
    VERDE = "Verde",
    AMARELO = "Amarelo", 
    LARANJA = "Laranja",
    VERMELHO = "Vermelho"
}

type Pessoa ={
    nome: string,
    idade: number,
    corFavorita:corArcoIris

}

let Pessoa1 ={
    nome: "Ronald",
    idade: 24,
    corFavorita:corArcoIris.AMARELO

}

let Pessoa2 ={
    nome: "Gabriela",
    idade: 25,
    corFavorita:corArcoIris.AZUL

}

let Pessoa3 ={
    nome: "Ana",
    idade: 35,
    corFavorita:corArcoIris.VERDE

}