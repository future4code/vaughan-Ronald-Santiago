const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //1a-Crie um novo arquivo somente com os nomes

 nomesPets = pets.map(pets => pets.nome)
 console.log(nomesPets)

//1b-Crie um novo arquivo somente com os salsichas
 salsichas = pets.filter(p => p.raca === 'Salsicha')
 console.log(salsichas)

 //1c Mensagem para poodles
 mensagemPoodles = pets.filter(p => p.raca === 'Poodles')
 console.log("Você ganhou um cupom para tosar: ", mensagemPoodles)



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

 //2-aa) Crie um novo array que contenha apenas o nome de cada item
 nomesProdutos = produtos.map(p => p.nome)
 console.log(nomesProdutos) 

 //2-b b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
 novoValor = produtos.map(p=> p.preco)
 console.log(novoValor)

produtoDesconto =[...nomesProdutos, ...novoValor]


//2-b) Crie um novo array que contenha apenas os objetos da categoria Bebidas
bebidas = produtos.filter(p => p.categoria === 'Bebidas')
 console.log(bebidas)


//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
ype = produtos.filter(p => p.nome.includes('Ypê'))
 console.log(ype)

 const novoYpe = ype.map((prod) => {
 return `Compre ${prod.nome} por ${prod.preco}`;
});

console.log(novoYpe)