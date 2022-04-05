import * as express from 'express'
import * as cors from 'cors'
import { getAutomaticTypeDirectiveNames, Type } from 'typescript'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () =>{
    console.log("Servidor")
})

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}



let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

//O melhor método é o get

app.get("/users", (req,res) =>{
    

  const listaNova =  users.map((user) =>{
        return user
    })

    res.send(listaNova)
})

//Exercicio2

app.get("/usersid", (req,res) =>{
    let codeError: number = 400
    try{

     const type: UserType = req.query.type as UserType
     let usuario: user | undefined = users.find((user) => user.type.toLocaleLowerCase() === type.toLocaleLowerCase())
    
      res.status(200).send(usuario)

     } catch(error: any){
         res.status(codeError).send(error.message)

      }
  })

  app.get("/usersreturn", (req,res) =>{
    let codeError: number = 400
    try{

    const nome = req.query.name as string
    let nomeUsuario: user | undefined = users.find((user) => user.name === nome)
    if(!nomeUsuario){
        throw new Error('Não existe esse usuário')
    }
    res.status(200).send(nomeUsuario)
    }catch(error){
        res.status(codeError).send(error.message)

    }
 })

app.put("/createuser", (req, res) =>{
        const id = req.body.id
        const name = req.body.name
        const email = req.body.email
        const type = req.body.type
        const age = req.body

        const novoUsuario: user ={
            id: id,
            name: name,
            email: email,
            type: type,
            age: age
        }

        users.push(novoUsuario)

        res.send(users)
})
       
