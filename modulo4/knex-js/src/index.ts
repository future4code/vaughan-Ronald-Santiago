import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";


const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

app.get("/users/:name", async (req, res) => {
    try {
      // const id = req.params.id
  
      console.log(await searchActor(req.params.name))
  
      res.send("consulta realiza com sucesso")
    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  })
  
  const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
  }

  const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
  };
 

  //

















