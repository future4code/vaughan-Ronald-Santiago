import { compareSync, genSaltSync, hashSync } from "bcryptjs";

export class HashManager{
    createHash = (plainText: string): string =>{
        const cost = Number(process.env.BCRYPT_COST)
             const salt:string = genSaltSync(cost)

             const cypherText: string = hashSync(plainText, salt)
             return cypherText

    }

        compareHash = (plainText: string, cyperText: string): boolean =>{
        return compareSync(plainText, cyperText)
    }

}
 