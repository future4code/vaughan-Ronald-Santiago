//1 Exercício - criar um endpoint básico
import express from 'express'
import cors from 'cors'


const app = express();

app.use(express.json());
app.use(cors());


app.listen(3003, () => {
    console.log("Server está rodando")
})

app.get('/', (req, res) => {
    res.send('Olá ! Bem vindo !')
})

type Tipo = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

let posts: Post[] = [{ id: 1, title: "Rosas", body: "ronald", userId: 23 }, { id: 2, title: "Marrocos", body: "amer", userId: 24 }, { id: 3, title: "titulo", body: "ameriri", userId: 25 }]

let usuarios: Tipo[] = [{ id: 2222, name: "Ronald", phone: 23455, email: "rei@gmail.com", website: "emoteraterapia.com" }, { id: 2222, name: "Aloha", phone: 2334, email: "roni@gmail.com", website: "ww.site" }]

app.get("/users", (req, res) => {
    const users = usuarios;

    const listaUsuarios = users.map((user) => {
        return user.email

    })
    res.status(200).send(listaUsuarios)
})

app.get("/posts", (req, res) =>{
    const postagens = posts
    
    const listaPosts = postagens.map((post) =>{
        return post
        
    })

    res.status(200).send(listaPosts)
})

app.get("/posts/:userId", (req, res) =>{
    const idUser = req.params.userId
    const getPostId = posts.filter((post) =>{
        return post.userId === Number(idUser)

    })
    res.status(200).send(getPostId)
})


