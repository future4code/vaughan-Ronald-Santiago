import express from 'express';
import cors from 'cors';
import { arrayProdutos, Produto } from './data';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3006, () => {
    console.log("Servidor rolando")
})

//Exercício1
app.get('/teste', (req, res) => {
    res.send("Rolando !")
})

//Exercício3
app.post("/createproduto", (req, res) => {
    try {
        const idNovo = Date.now
        const name = req.body.name
        const price = req.body.price
        if (typeof name !== 'string') {
            throw new Error("Campo Body sem estar certo")
        }

        if (typeof price !== 'number') {
            throw new Error("Está sem ser numérico")
        }

        if (price <= 0) {
            throw new Error("Coloque um número maior que 0")
        }


        const novosProdutos: Produto = {
            id: Date.now(),
            name: name,
            price: price

        }

        arrayProdutos.push(novosProdutos)
        res.send(arrayProdutos)
    }
    catch (e: any) {

        res.status(422).send(e.message)

    }

})

app.get("/produtoreturn", (req, res) => {

    const listaProdutos = arrayProdutos.map((produto) => {
        return produto
    })

    res.send(listaProdutos)
})

app.post("/produto/:produtoId", (req, res) => {
    try {
    const priceProduto = Number(req.body.price)
    const idNovo = Number(req.params.produtoId)
    arrayProdutos.forEach((produto) => {

        if (produto.id === idNovo) {
            produto.price = priceProduto

        }

        if(!produto.price){
            throw new Error("Não tem o preço")

        }
        if(typeof produto.price !== 'number'){
            throw new Error("Diferente de número !")
        }

        if(produto.price <=  0){
            throw new Error("Coloque um número maior !")

        }

    })
    res.send(arrayProdutos)

}catch(a: any) {
    
    res.status(422).send(a.message)

}

})





    app.delete("/produtosdelete/:userId", (req, res) => {
        try{
        const idNovo = req.params.userId
        const novaLista = arrayProdutos.filter((id) => {
            if(!id.id){
                throw new Error("O id não existe !")

            }
            return id.id !== Number(idNovo)
        })

        

        res.send(novaLista)
    }catch(m : any){
        res.status(422).send(m.message)


    }
    })
