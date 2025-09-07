import { Server } from "http";
import { WebSocket, WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userSocketMap = new Map<string, WebSocket>();

export const establishWebSocketConnection = (server: Server)=>{
    try{
        const wss = new WebSocketServer({server});
        wss.on('connection',(ws)=>{
            ws.on('error',console.error);
            ws.on('message', (data: string)=>{
                const parsedData = JSON.parse(data);

                if(parsedData && parsedData?.type == "auth" && process.env.JWT_SECRET_KEY){
                    const verifiedToken : any = jwt.verify(parsedData?.token, process.env.JWT_SECRET_KEY);
                    const userId = verifiedToken?.userID;

                    if(userId){
                      userSocketMap.set(userId, ws);
                    }
                }else{
                    throw new Error("Jwt Secret not found");
                }
            });

            ws.on("close", () => {
                for (const [userId, socket] of userSocketMap) {
                    if (socket === ws) {
                        userSocketMap.delete(userId);
                        console.log(`User ${userId} disconnected from WebSocket`);
                        break;
                    }
                }
            });
        })
    }catch(e){
        console.log("Error while making websocket connection ", e);
    }
}


export const sendNotificationToUser = async(userId: string, blogId: string, message: string)=>{
    try{
        const ws = userSocketMap.get(userId);
        if(ws && ws.readyState == WebSocket.OPEN){
            const notificationData = {
                blogId,
                message,
            }
            ws.emit("notification", notificationData);
        }else{
            console.log("user is not online send the notification when back online");
        }
    }catch(e){
        console.log("@error while sending the notification to the author ", e);
    }
}