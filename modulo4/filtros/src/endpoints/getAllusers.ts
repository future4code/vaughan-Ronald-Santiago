
import { connection } from "../data/data"
import { Request, Response } from "express"


type user = {
   id: number,
   name: string,
   email: string,
   type: string


}

//Aqui estou criando a query que vai selecionar especificamente os nomes
//Usei o select para procurar em todas as colunas algo parecido com o nome
export const selectAllUsers = async (nome: string): Promise<user[]> => {
 
 let result: user[] = await connection("aula48_exercicio")  
      .select("*")
      .where("name", "like", `%${nome}%`)
   return result
}

//Aqui neste endpoint estou utilizando a outra função que criei para realmente trazer as informações do banco de dados
export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   let nome = req.query.nome as string
   try {
      const users = await selectAllUsers(nome)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}