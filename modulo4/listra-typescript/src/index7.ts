type Produtos = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
 

}

let num = [{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040}]

let estoque: Produtos[] =[
    
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
    
]

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}
// let preco: number = 10;
// let valores : string =  preco.toFixed(2)
// console.log(typeof valores )

  function corrigirPreco(estoque:Produtos[]){
       return estoque.map((produto) =>{
           
           produto.valorUnitario = ajustaPreco(produto.valorUnitario as number)
           return produto

       }).sort((produto, id) =>{
             return  produto.quantidade- id.quantidade
       })

  }

   console.table(corrigirPreco(num))
   

