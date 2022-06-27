import { IPetsData } from "../Model/interfaceData";
import Pets from "../Model/Pets";
import { BaseDatabase } from "./BaseDataBase";
import { TourDatabase } from "./TourDataBase";

export class PetsData extends BaseDatabase implements IPetsData{
    protected TABLE_NAME = "PETS"

    create = async( pets: Pets): Promise<Pets> => {
        try {
            await this.getConnection()
            .insert({
                id: pets.getId,
                name_pets: pets.getNames_pets,
                doghero_id: pets.getDogHero_Id

            })
            .into(this.TABLE_NAME)
            return pets
            
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }
            else{
                throw new Error("Bank error !")
            }
            
        }
    }

    findPetsByName = async(name: string) : Promise<Pets> =>{
        try {
            const answerName = await this.getConnection()
            .select("*")
            .where({name})
            .into(this.TABLE_NAME)

            return answerName[0]
            
        } catch (error: any) {
            throw new Error(error.message)
            
        }
    }
}