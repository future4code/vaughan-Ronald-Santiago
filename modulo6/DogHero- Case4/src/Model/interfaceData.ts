import { ROLES_STATUS } from "./DogHeroStatus"
import Tour from "./Tour";
import Pets from "./Pets";

export interface IDogHeroData{
    createTour(doghero: Tour): Promise<Tour>
    findDogheroById(id: string): Promise<Tour>
    index(): Promise<Tour>
    searchByDate(today: string): Promise<Tour>
    start(id: string, status: string): Promise<void>
}

export interface IPetsData{
    create(pets: Pets): Promise<Pets>
    findPetsByName(name: string): Promise<Pets>
}

