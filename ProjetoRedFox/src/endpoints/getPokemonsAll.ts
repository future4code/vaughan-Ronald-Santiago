import { connection } from "../connection";
import { Response, Request } from "express";


export const getAllPokemons = async (): Promise<any> => {
    
    const result  = await connection("Pokemon_Go")
    .select("*")
    return result 
  }