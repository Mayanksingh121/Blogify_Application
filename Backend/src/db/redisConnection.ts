import { createClient } from "redis";
import dotevn from "dotenv";


dotevn.config();
const redisClient  = createClient({
  username: "default",
  password: process.env.REDIS_DB_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST || "",
    port: Number(process.env.REDIS_PORT),
  },
});

export const connectRedis = async() => {
  try {
    redisClient.on("error", (err:Error) => console.log("Redis Client Error", err));
    await redisClient.connect();
    console.log("Redis server connected");
  } catch (e) {
    throw e;
  }
};

export default redisClient;


