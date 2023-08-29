import { io } from 'socket.io-client';


export const socket = io("https://probuilderserver.onrender.com/", { transports: ['websocket', 'polling'] });

// https://probuilderserver.onrender.com/

// socket.disconnect();

