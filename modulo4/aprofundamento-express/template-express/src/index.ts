import express from 'express'; 
import cors from 'cors';
import { send } from 'process';
  

const app = express();

app.use(express.json());
app.use(cors());


app.listen(3005, () => {
    console.log("Backend rodando na porta 3005!");
});

type Afazeres ={
    userId: number,
    id: number,
    title: string,
    concluido: boolean
}



console.log("Servidor funfando")

let tarefas: Afazeres[] = [{userId: 1, id:1, title: "correr", concluido: false}, {userId: 2, id:2, title: "lavar", concluido: true}, {userId: 3, id:3, title: "Nadar", concluido: false}]

app.get("/ping", (req, res) =>{
    res.send("Pong!")
})

app.get("/afazeres/:concluido", (req, res) =>{

    const consulta = req.params.concluido

   const listaStatus = tarefas.filter((status) =>{
       return String(status.concluido) === consulta
         

    })
     res.status(200).send(listaStatus)
} )

app.post("/createafazeres", (req, res) =>{
   
  
    const userId = req.body.userId
    const id = req.body.id
    const title = req.body.title
    const concluido = req.body.concluido

    const novoAfazer: Afazeres= {
        userId: userId,
        id:  id,
        title: title,
        concluido: concluido

    }
    
    
 
    tarefas.push(novoAfazer)

    res.send(tarefas)
    

})


app.post("/edicaostatus", (req, res) => {
    
    const edicao = tarefas

    const listaEdicao  = edicao.filter((edicao) =>{
        let novoStatus = edicao.concluido;
        if(edicao.concluido === true){
            novoStatus = false
            return edicao.concluido = novoStatus
           
        }
        else{

            return edicao.concluido = true
        }

    })
    res.send(listaEdicao)

})

app.delete("/afazeres/:userId", (req, res) =>{
    const tarefa= Number(req.params.userId)

    const userUpdate = tarefas.filter((tarefinha) =>{
        return tarefinha.id !== tarefa
     
    })

    res.send(userUpdate)
    
})

app.get("/afazeresreturn/:userId", (req, res) =>{
    const idNovo = req.params.userId
    const novaLista = tarefas.filter((id) =>{
        return id.id === Number(idNovo) 

    })

    res.send(novaLista)
})