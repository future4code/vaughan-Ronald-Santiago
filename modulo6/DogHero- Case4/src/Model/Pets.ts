export default class Pets{
    constructor(
        private id: string,
        private names_pets: string,
        private doghero_id: string

    ){}

    public getId(): string{
        return this.id

    }

    public getNames_pets(): string{
        return this.names_pets
    }

    public getDogHero_Id(): string{
        return this.doghero_id
        
    }
}