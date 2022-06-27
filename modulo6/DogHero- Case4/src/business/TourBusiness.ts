import { BaseDatabase } from "../data/BaseDataBase";
import Tour, { TourinputDTO } from "../Model/Tour";
import { IdGenerator } from "../services/idGenerator";
import { IDogHeroData, IPetsData } from "../Model/interfaceData";
import { ROLES_DURATION, ROLES_STATUS } from "../Model/DogHeroStatus";
import Pets from "../Model/Pets";

export default class TourBussiness {
    private dogheroData: IDogHeroData;
    private idGenerator: IdGenerator;
    private petsData: IPetsData

   

     constructor(
         dogheroDataRepository: IDogHeroData,
         petsDataRepository: IPetsData
        //  private idGenerator: IdGenerator
     )
    {
        this.dogheroData = dogheroDataRepository
        this.idGenerator = new IdGenerator();
        this.petsData = petsDataRepository;
    }

    public async createTour(tour: TourinputDTO){
        const {names_pets, date_schedule, latitude, longitude, date_start, date_end} = tour
        if(
            !names_pets || !date_schedule || !latitude || !longitude || !date_start || ! date_end

        ) {
            throw new Error("Invalid fields !")

        }
        
        const id = this.idGenerator.generateId()
        let start = new Date(date_start).getTime()
        let end = new Date(date_end).getTime()

        let price, duration

        let time = Math.abs(start - end)
        time = (time/60000)

        if(time <= 30){
            duration = ROLES_DURATION.TRINTA
            price = 25 + (names_pets.length - 1)* 15
        }
        else{
            duration = ROLES_DURATION.SESSENTA
            price = 35 + (names_pets.length - 1) * 20
        }

        const dog = new Tour(
            id,
            ROLES_STATUS.A_FAZER,
            date_schedule,
            price,
            latitude,
            longitude,
            duration,
            date_start,
            date_end
        )
        await this.dogheroData.createTour(dog)

        for(let name of names_pets){
            const nameId = this.idGenerator.generateId()
            const pets = new Pets(nameId, name, id)
            await this.petsData.create(pets)

        }
        return dog
    }

    index = async(today: string = ""): Promise<any> =>{
        const service = await this.dogheroData.searchByDate(today)
   
        return service
    }

    start = async (id: string, status: string): Promise<void> =>{

        await this.dogheroData.start(id, status)
    }


    
 

}