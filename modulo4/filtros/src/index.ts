import express, {Express} from 'express'
import cors from 'cors'

import { AddressInfo } from "net";
import { getAllUsers } from './endpoints/getAllusers';







const app: Express = express();

app.get("/users", getAllUsers)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

app.use(express.json());
app.use(cors());