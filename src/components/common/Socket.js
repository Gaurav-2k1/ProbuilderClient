import { io } from 'socket.io-client';


export const socket = io("http://localhost:4000", { transports: ['websocket', 'polling'] });
// socket.on("connect_error", (err) => {
//     console.log(err instanceof Error); // true
//     console.log(err.message); // not authorized
//     console.log(err.data); // { content: "Please retry later" }
// });
// socket.disconnect();

