




//EXERCICIO 1 - Vai sair o número do indice, o nome da pessoa e apelido

//EXERCICIO 2- Vai  sair somente os nomes
//Exercicio 3- Vai sair somente o nome Chijo

//Novamente eu só consegui fazer uma parte do código e nem tão bem feita







const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const apenasDogs = pets.filter((animais, indice, array) => {
     return pets.tipo == "Salsicha"
 })

 const apenasPoodles = pets.filter((animais, indice, array) => {
     console.log("Você ganhou um cupom ", animais.pets.tipo  =="Poodle")

 })

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

const apenasNomes = [produtos]
{
    console.log(produtos.nome)
}

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const aplicandoDesconto = [produtos]
{
    console.log(produtos.nome, " e o preço é: ", produtos.preco%5)
}



//const nomesPokemons = pokemons.map((pokemon) => {
  //  return pokemon.tipo