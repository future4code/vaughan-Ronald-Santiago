import connection from "../connection";
import { IdGenerator } from "../services/IdGenerator";
import {Request, Response} from 'express'
import { Authenticator } from "../services/Authenticator";
import { authenticationData } from "../types";
import { HashManager } from "../services/HashManager";
export type user = {

    id: string
    email: string, 
    name: string,
    password: string
   
 }
export default async function userCreate( req: Request, res: Response): Promise<void>{

   try {
       let name = req.body.name
       let password = req.body.password
       let email = req.body.email
       
       if(!name || !password || !email){
           throw new Error("Por favor, preencha os campos abaixo")

       }

       let IdGenerato = new IdGenerator()
       const id: string = IdGenerato.generateId()
       let hashManager = new HashManager()
       let passwordValid = hashManager.createHash(password)


       const newUser: user = {id, email, name, password:passwordValid}

       await connection('Users_Cookenu').insert(newUser)

       const authenticator: Authenticator = new Authenticator;
       const payload: authenticationData = {
           id: newUser.id
       }
       const token = authenticator.GenerateToken(payload)
       res.status(201).send({token})
       
   } catch (error: any) {
    res.status(500).send(error.message)   
   }

}