import mongoose, { connect } from "mongoose"
import { DB_NAME } from "../constants.jsn"

const connectDB = async()=>{
    try {
       const connectionInstance = await connect.mongoose(`${process.env.MONGOOSE_URI}/${DB_NAME}`)
       console.log(`DB CONNETED! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGOOSE CONNECTION ERROR",error);
        throw err
    }
}

export default connectDB