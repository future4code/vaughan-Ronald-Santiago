

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

let Pessoa1: Pessoa= {
    nome: "Ronald",
    idade: 24,
    corFavorita:corArcoIris.AMARELO

}

let Pessoa2: Pessoa ={
    nome: "Gabriela",
    idade: 25,
    corFavorita:corArcoIris.AZUL

}

let Pessoa3: Pessoa ={
    nome: "Ana",
    idade: 35,
    corFavorita:corArcoIris.VERDE

}