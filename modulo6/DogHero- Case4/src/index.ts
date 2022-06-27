import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import TourBussiness from './business/TourBusiness';
import TourController from './controller/TourController';
import dotenv from "dotenv";
import {TourDatabase} from "./data/TourDataBase"
import { PetsData } from './data/PetsData';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER, 
    password: process.env.DB_PASS,
    database: process.env.DB_NAME, 
    multipleStatements: true
  }
});

const tourBusiness = new TourBussiness(new TourDatabase, new PetsData )
const tourController = new TourController(tourBusiness)

app.post("/tourwalk/create", tourController.create)
app.get("/tourwalk/index", tourController.index)
app.put("/tourwalk/start", tourController.start)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});