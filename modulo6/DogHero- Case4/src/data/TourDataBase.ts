import { ROLES_DURATION, ROLES_STATUS } from "../Model/DogHeroStatus";
import Tour from "../Model/Tour";
import { BaseDatabase } from "./BaseDataBase";

export class TourDatabase extends BaseDatabase {
   private static TABLE_NAME = "DOGHERO"
    
   public async createTour(tour: Tour): Promise<Tour> {
       try{
           await this.getConnection(). 
           insert({
            id: tour.getId(),
            status: tour.getStatus(),
            date_schedule: tour.getData_Schedule(),
            price: tour.getPrice(),
            latitude: tour.getLatitude(),
            longitude: tour.getLongitude(),
            duration: tour.getDuration(),
            date_start: tour.getDate_Start(),
            date_end: tour.getDate_End()

           })
           .into(TourDatabase.TABLE_NAME)

           return tour
       } catch (error: any){
           throw new Error(error.sqlMessage || error.message)
       }
   }

   findDogheroById = async (id: string): Promise <Tour> => {
    try {
        const answerId = await this.getConnection()
        .select("*")
        .where({id})
        .into(TourDatabase.TABLE_NAME)

        return answerId[0]
        
        
    } catch (error: any) {
        throw new Error(error.message)
        
    }
   }

   index = async (): Promise<any> =>{
    try {
        const result = await this.getConnection()
        .select("*")

        return result
        
    } catch (error: any) {
        throw new Error(error.message)
        
    }
   }

   searchByDate = async (today: string) : Promise <any> => {
    try {
        const result = await this.getConnection()
        .select("*")
        .join("PETS", "doghero_id", "=", "PETS.doghero_id")
        .where("date_schedule", "LIKE", `%${today}%`)
        .into(TourDatabase.TABLE_NAME)
        
        return result
    } catch (error: any) {
        throw new Error(error.message)
        
    }
   }


   start = async(id: string, status: string): Promise<void> =>{
    try {
        await this.getConnection()
        .update({status})
        .where({id})
        .into(TourDatabase.TABLE_NAME)
        
    } catch (error: any) {
        throw new Error(error.message)
        
    }
   }

}