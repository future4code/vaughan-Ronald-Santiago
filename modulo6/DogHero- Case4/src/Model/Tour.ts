
import { ROLES_STATUS, ROLES_DURATION } from "./DogHeroStatus"
export default class Tour {
   
   constructor(
    private id: string,
    private status: ROLES_STATUS,
    private date_schedule: Date,
    private price: number,
    private latitude: string,
    private longitude: string,
    private duration: ROLES_DURATION,
    private date_start: Date,
    private date_end: Date
   )
 {}

 getId():string {
     return this.id
 }

 getStatus(): ROLES_STATUS {
     return this.status
 }

 getData_Schedule(): Date {
     return this.date_schedule
 }

 getPrice(): number {
     return this.price
 }

 getLatitude(): string{
     return this.latitude
 }

 getLongitude(): string{
     return this.longitude
 }

 getDuration(): ROLES_DURATION {
     return this.duration
 }

 getDate_Start(): Date {
     return this.date_start
 }

 getDate_End(): Date {
     return this.date_end
 }

}

export type TourinputDTO = {
    id?: string,
    names_pets: string,
    status?: ROLES_STATUS
    date_schedule: Date,
    latitude: string,
    longitude: string,
    date_start: Date,
    date_end: Date

}