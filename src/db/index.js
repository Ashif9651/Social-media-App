import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connetionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${process.env.DB_NAME}`)
        console.log(`MongoBD conneted at port ${process.env.PORT}`)

    } catch (err) {
        console.log("Mongo connetion failed ", err)
        process.exit(1)
    }
}

export default connectDB