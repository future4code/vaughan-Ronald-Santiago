import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

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

//1a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
//Sim, pois pode ser utilizado tanto caracteres quanto números

//2)a)Primeiro ali está tendo a conexão com o banco de dados a partir do connection e após isso está sendo feito uma inserção de dados na tabela ali dentro do into

//3a)Serve para ser somente string

const userTableName = "User";

	 const createUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	};






const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});