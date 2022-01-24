//Exercicio1

const banana = +"5"
console.log(banana)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novosPets = pets.map(item => item.raca)
 const novoPet = pets.map(item => item.raca)

 
 //console.log("Você ganhou um cupom de desconto para tosar o: ", novosPets.map === "Poodles")

//Exercicio2
const salsichao= pets.filter((pets, indice, array) => {
    return pets.raca === "Salsicha"

})

//console.log(salsichao)



 
 //Exercicio2
 

 ////console.log(nomesProdutos)



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

const nomesduto= produtos.map(item => item.nome)
const precosduto = produtos.map(produtos => produtos.preco) 
const aumentada = precosduto.map(x => x*5)
console.log(aumentada)
const novoValor =[...nomesduto, ...aumentada]
console.log(novoValor)
const NovosProdutos = [... produtos]

//Exercicio2 
const bebidas = produtos.filter(p => p.categoria === 'Bebidas')

console.log(bebidas)

const ype = produtos.filter(p => p.nome === 'Ypê' )

console.log(ype)








 