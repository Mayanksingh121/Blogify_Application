import mongoose from "mongoose"

export const dbConnect = async(): Promise<void>=>{
    try{
       if(!process.env.DB_CONNECTION_STRING){
        throw new Error("Connection string is not present in the env");
       }
       await mongoose.connect(process.env.DB_CONNECTION_STRING);
       console.log("db connected successfully")
    }catch(e){
        console.log("Can't connect db at the moment");
        throw e;
    }
}