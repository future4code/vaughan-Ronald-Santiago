import knex from "knex"
import dotenv from "dotenv"

dotenv.config()


export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // database: process.env.DB_NAME

    // host : '35.226.146.116',
    user : '21713049-ronald-santiago',
    password : "WGEL88c6UazK@ocZ!Hdw",
    database : 'vaughan-21713049-ronald-santiago',
  }
});