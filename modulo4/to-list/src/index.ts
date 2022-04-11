import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import knex from 'knex';
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

app.post("/users", async(req: Request, res: Response): Promise<void> =>{
    try{
    let novoUsuario = await(
        req.body.name,
        req.body.nickname,
        req.body.email

    )
    res.status(201).send("Usuário criado com sucesso")
    }catch(err: any){
        res.status(500).send(err.sqlMessage || err.message)
    }
})




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
