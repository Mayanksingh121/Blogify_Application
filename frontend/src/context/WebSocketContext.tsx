import { createContext, useEffect, useState } from "react";
import { WEBSOCKET_URL } from "../utils/constants";

const WebSocketContext = createContext({});

const WebSocketContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    let socket = new WebSocket(`${WEBSOCKET_URL}`);
    socket.onopen = () => {
      console.log("Socket connection is successfull");
    };
    socket.onerror = () => console.log("getting error in socket connection");

    setSocket(socket);
    return () => {
      socket.close();
      console.log("Connection closed");
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ socket }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketContextProvider;
