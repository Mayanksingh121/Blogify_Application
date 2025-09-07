import express, { urlencoded } from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/main.route";
import { dbConnect } from "./db/dbConnection";
import { createServer } from 'https';
import { connectRedis } from "./db/redisConnection";
import { establishWebSocketConnection } from "./websocket";

const app = express();
const server = createServer(app);
establishWebSocketConnection(server);
dotenv.config();


const startServer = async()=>{
    try{
        await dbConnect();
        await connectRedis();
        app.use(express.json());
        app.use(urlencoded({extended: true}));
        app.use("/apiv1",mainRouter);
        app.listen(process.env.PORT, ()=>{
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
