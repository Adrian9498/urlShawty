import express from 'express';
import logger from './Logger/logger.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/url.routes.js';
import cors from 'cors';
dotenv.config()

function startServer(){
    /**
     * Configuracion de la base
     */
    const mongoConnectionString = process.env.URL
    mongoose.connect(mongoConnectionString)
    const database = mongoose.connection

    database.on('error',(error)=>{
        console.log(error)
    })
    
    database.once('connected',()=>{
        console.log("Conexion exitosa")
    })

    /**
     * Configuracion del servidor
     */
    const app = express();
    app.use(cors());
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(router)
    app.listen(process.env.PORT)

    logger.info(`Server listening on http://localhost:${process.env.PORT}`)
}

startServer()
