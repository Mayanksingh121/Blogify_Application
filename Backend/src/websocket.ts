import { Server } from "http";
import { WebSocketServer } from "ws";

export const establishWebSocketConnection = (server: Server)=>{
    try{
        const wss = new WebSocketServer({server});
        wss.on('connection',(ws)=>{
            ws.on('error',console.error);
        })
    }catch(e){
        console.log("Error while making websocket connection ", e);
    }
}