import express from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/main.route";
import { dbConnect } from "./db/dbConnection";
import { connectRedis } from "./db/redisConnection";

const server = express();
dotenv.config();


const startServer = async()=>{
    try{
        await dbConnect();
        await connectRedis();
        server.use(express.json());
        server.use("/apiv1",mainRouter);
        server.listen(process.env.PORT, ()=>{
            console.log("Server is listing on port ", process.env.PORT);
        })
    }catch(e: unknown){
        if(e instanceof Error){
            console.log("Error while starting the server ", e?.message);
        }else{
            console.log("Unknown error while starting the server "+ e);
        }
    }
}

startServer();
