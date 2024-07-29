import dotenv from "dotenv"

import connectDB from "./db/index.js";
import express from "express";

const app = express()

dotenv.config({
    path: "./env"
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log('port listening on 3000');
        })
    })
    .catch((err) => {
        console.log('Mongo connection fail');
    })