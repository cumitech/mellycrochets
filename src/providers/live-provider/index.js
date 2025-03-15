import { BASE_URL } from "../../constants/api-url";
import { io } from "socket.io-client";

// Live Provider using Socket.IO

const socket = io(BASE_URL, { path: "/cart_items" });
export const liveProvider = {
  subscribe: ({ channel, callback }) => {
    const eventHandler = (data) => {
      callback(data);
    };

    socket.on(channel, eventHandler);

    return {
      unsubscribe: () => {
        socket.off(channel, eventHandler);
      },
    };
  },
};
