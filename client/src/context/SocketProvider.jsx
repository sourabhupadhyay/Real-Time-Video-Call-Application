import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {
  const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:8000";
  const socket = useMemo(() => io(serverUrl, { transports: ['websocket', 'polling'] }), [serverUrl]);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
