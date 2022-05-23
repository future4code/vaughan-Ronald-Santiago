import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import { Response, Request } from "express";
import { searchPokemonName } from './endpoints/getBySearchName';
import { getAllPokemons } from './endpoints/getPokemonsAll';
import { searchAttackPokemon } from './endpoints/getBySearchAtack';
import selectAllUsers from './endpoints/selectAllUserOrders';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());



app.get("/pokemon", async (req: Request, res: Response) => {
    try {
      const name = req.body.name as string
    //   console.log(name)
      const pokemon = await searchPokemonName(name);
  
      res.status(200).send(pokemon)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.get("/pokemonAlls", async(req: Request, res: Response) =>{
      try {
          const pokemon = await getAllPokemons()
          res.status(200).send(pokemon)    

      } catch (error: any) {
          res.status(400).send({message: error.message})

          
      }
  })

  app.get("/pokemonAttack", async(req: Request, res: Response) =>{
      try {
          const atack = Number(req.body.atack)
          const pokemon = await searchAttackPokemon(atack)
          console.log(pokemon)

          res.status(200).send(pokemon)
          
      } catch (error) {
          res.status(400).send({message: error.message})
          
      }
  })

  app.get("/pokemonOrderBy",async (req:Request, res: Response) =>{
    try {
        let sort = req.query.sort as string
        let order = req.query.order as string
        const user = await selectAllUsers(order, sort)
        res.status(200).send(user)
        
    } catch (error: any) {
        res.status(400).send(error.message)
        
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