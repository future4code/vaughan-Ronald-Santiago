import { connection } from "../connection";
import { Response, Request } from "express";


export const searchPokemonName = async (Name: string): Promise<any> => {
    
    const result  = await connection("Pokemon_Go")
    .select("*").where({Name})
    return result 
  }

  
//   const result = await connection("aula48_exercicio")
//         .where("name", "LIKE", `%${name}%`);
 
  
  
  
  






