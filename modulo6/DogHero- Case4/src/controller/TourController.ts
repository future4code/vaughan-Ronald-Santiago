import {Response, Request} from "express"
import TourBussiness from "../business/TourBusiness"
import { TourinputDTO } from "../Model/Tour"

export default class TourController{
   
    constructor(private tourBusiness : TourBussiness){

    }

    create = async( req: Request, res: Response) => {
        const {
            names_pets,
            date_schedule,
            latitude,
            longitude,
            date_start,
            date_end
        } = req.body

        const input : TourinputDTO ={
            names_pets,
            date_schedule,
            latitude,
            longitude,
            date_start,
            date_end

        }

        try {
            const service = await this.tourBusiness.createTour(input)

            res.status(201).send({message: "Service registered !"})
            
        } catch (error: any) {
            res.status(500).send("Erro no signup")
            
        }
    }
  
    index = async(req: Request, res: Response) => {
        try {
            const today = req.query.today as string
            const service = await this.tourBusiness.index(today)
            res.status(200).send({service})
        } catch (error: any) {
            res.status(500).send({message: error.message})

            
        }
    }

    start = async (req: Request, res: Response) =>{
        const status = req.body.id
        const id = req.body.status

        try {
            await this.tourBusiness.start(id, status)
            res.status(201).send({message: 'Status edited sucess'})
            
        } catch (error: any) {
            res.status(500).send({message: error.message})
        }
    }


}