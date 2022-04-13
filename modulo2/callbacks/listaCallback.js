//1-a) Crie um novo array que contenha apenas o nome dos doguinhos

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const NovosDogs = pets.map(pets => pets.nome) //Aqui dessa forma ele pega somente os nomes

 console.log(NovosDogs)

 //1-b Crie um novo array apenas com os cachorros salsicha

 const salsichas = pets.filter(p => p.raca === 'Salsicha') //O filtro filtra somente os salsichas, ele literalmente cria algo novo ali
 console.log(salsichas)

 //1-c 
 const mensagemPoodles = pets.filter(p => p.raca === 'Poodle')
 console.log("Você ganhará um cupom de desconto: ", mensagemPoodles)

 //2

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

 //2-a Somente os nomes
 const nomesProdutos = produtos.map(p =>p.nome)
console.log(nomesProdutos)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const novoValor = produtos.map(x => x.preco*0.05)
console.log(novoValor)

//c) c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const bebidas = produtos.filter(p => p.categoria === 'Bebidas')
console.log(bebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const nomesYpe = produtos.filter(p => p.nome.includes('Ypê'))
console.log(nomesYpe)

//e
const Ype = produtosYpe.map((prod) => {
       return (`Pegue ${prod.nome} por ${prod.preco}`)
     });

     console.log(Ype)

