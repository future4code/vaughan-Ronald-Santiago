import {Request, Response} from "express"
import connection from "../connection"
import { Authenticator } from "../services/Authenticator";
import { authenticationData } from "../types";
import { HashManager } from "../services/HashManager";

export default async function login(req: Request, res: Response): Promise<void> {
      try {
          let {email, password} = req.body; //Pegando os valores a partir do body
          if(!email || ! password){
             throw new Error("Erro ao coloar o email e password !")

          }
           console.log("Password é esse", password)
          const passwordValid = new HashManager() 
          let [user] = await connection('Users_Cookenu').where({email})  //Aqui crio minha conexão com com  o banco de dados e especificamente vejo a a coluna email
          
          const newValidation: boolean = passwordValid.compareHash(password, user.password)
          console.log(newValidation)
          console.log("NewValidation", newValidation)
          console.log("User", user)
          // if(!user || user.password !== newValidation) {  //Se não exister user ou a senha for diferente da criada 

          //   throw new Error("Credenciais inválidas")
          // }

          // const passwordValid = new HashManager() 
          // const newValidation: boolean = passwordValid.compareHash(password, user.password)
          console.log("Validação",  newValidation)

           if(!newValidation){
             throw new Error("Senha incorreta ")
           }    

          const authenticator: Authenticator = new Authenticator()
          const payload: authenticationData = {
              id: user.id

          }

          const token = authenticator.GenerateToken(payload) // No fim eu envio o token pelo send
          
          res.status(200).send({token})
          
      } catch (error: any) {
          res.send(error.message)
          
      }


}