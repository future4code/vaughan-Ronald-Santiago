import { connection } from './connection'

const createTables = () => connection.raw(`
  CREATE TABLE IF NOT EXISTS DOGHERO(
    id VARCHAR(255) PRIMARY KEY,
    status ENUM("A FAZER", "ANDAMENTO", "FEITO") DEFAULT "A FAZER",
    date_schedule DATE NOT NULL,
    price FLOAT NOT NULL,
    latitude VARCHAR(45) NOT NULL,
    longitude VARCHAR(45) NOT NULL,
    duration VARCHAR(255) NOT NULL,
    date_start timestamp NOT NULL,
    date_end timestamp NOT NULL
  );

  CREATE TABLE IF NOT EXISTS PETS(
      id VARCHAR(255) PRIMARY KEY,
      NAME VARCHAR(255) NOT NULL, 
      doghero_id VARCHAR(255) NOT NULL,
      FOREIGN KEY(doghero_id) REFERENCES DOGHERO(id) 
  )
  `
).then(() => {
    console.log("Tabelas criadas !")
}).catch((err) => {
    console.log(err.message || err.sqlMessage)
}).finally(() => {
    connection.destroy()
})

createTables() 


