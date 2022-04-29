import {Request, Response} from "express"
import connection from "../connection"
import { Authenticator } from "../services/Authenticator";
import { authenticationData } from "../types";

export default async function login(req: Request, res: Response): Promise<void> {
      try {
          let {email, password} = req.body;
          if(!email || !password){
              
            throw new Error("Por favor preencha os dados corretamente !")
          }

          let [user] = await connection('Users_Cookenu').where({email})

          if(!user || user.password !== password) {

            throw new Error("Credenciais inválidas")
          }
                              
          const authenticator: Authenticator = new Authenticator()
          const payload: authenticationData = {
              id: user.id

          }

          const token = authenticator.GenerateToken(payload)
          res.status(200).send(token)
      } catch (error: any) {
          res.send(error.message)
          
      }


}