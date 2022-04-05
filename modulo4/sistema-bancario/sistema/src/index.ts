import express from 'express';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());

app.listen(3004, () => {
    console.log("Server funfa");
});

type extrato = {
    valor: number,
    descricao: string,
    dataExtrato: string
}

type userType = {
    nome: string,
    cpf: number,
    data: string,
    saldo: number,
    extrato: extrato[]
}

let users: userType[] = [{
    nome: "Ronald",
    cpf: 1672,
    data: "21/06/22",
    saldo: 21344,
    extrato: [{
        valor: 342,
        descricao: "agua",
        dataExtrato: "21/11/2000"
    }

    ]
},

{
    nome: "Amanda",
    cpf: 1555,
    data: "21/07/08",
    saldo: 21344,
    extrato: [{
        valor: 333,
        descricao: "terra",
        dataExtrato: "21/12/1997"
    }

    ]
}

]



//EXERCÍCIO 1 - CRIAR A CONTA
app.post("/usersr", (req, res) => {
    try {
        let novoUsuario: userType = {
            nome: req.body.nome,  //Não preciso ao criar um novo objeto com tipo, ter de dar todos os recursos de requisição
            cpf: req.body.cpf,
            data: req.body.data,
            saldo: 0,
            extrato: []

        }


        let anoTempo = new Date().getTime()
        let [dia, mes, ano] = req.body.data.split("/")
        let anoNascimento: string = ano + "-" + mes + "-" + dia
        let idade = Date.parse(anoNascimento)

        if (anoTempo - idade < 18 * 31536000000) {

            throw new Error("Sua idade não é permitida.")
        }


        users.push(novoUsuario)
        res.status(200).send(users)  //Aqui é onde será de fato o envio da minha reuisição

    } catch (error: any) {
        res.send(error.message)

    }

})

//EXERCÍCIO 2- PEGAR SALDO
app.get("/users/:idCpf", (req, res) => {
    const nome = req.query.nome as string  //O query serve para realizar pesquisa
    const cpf = Number(req.params.idCpf)

    let novaLista = users.filter((user) => {
        if (user.nome === nome && user.cpf === cpf) {
            return user
        }
    }).map((user) => {
        return user

    })
    res.send(novaLista)

})

//EXERCÍCIO 3- ADICIONAR SALDO
app.get("/users/:idSaldo", (req, res) => {
    const nome = req.query.nome as string
    const cpf = Number(req.query.cpf)
    const saldo = Number(req.params.idSaldo)

    users.forEach((user) => {
        if (user.nome === nome || user.cpf === cpf) {
            user.saldo = saldo

        }
    })
    res.send(users)

})

//Exercício 4 - Pagar uma conta
app.post("/pagarconta", (req, res) =>{
     let valor = req.body.valor
     let descricao = req.body.descricao
     let dataExtrato = req.body.dataExtrato

     let pagamento: userType = {
        nome: "",  
        cpf: 0,
        data: "",
        saldo: 0,
        extrato: [valor = valor,
            descricao = descricao,
            dataExtrato = dataExtrato
        ]

    }

       users.push(pagamento)

       res.send(users)



})