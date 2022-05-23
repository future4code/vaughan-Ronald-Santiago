import { connection } from "../connection";


export const searchAttackPokemon = async (ATK: number): Promise<any> => {
 
    const result  = await connection("Pokemon_Go")
    .select("*").where({ATK})
    console.log("Result", result)
    return result 
  }

 
