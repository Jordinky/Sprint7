import { Server } from "socket.io";
import http from 'http'
import express from 'express'


const app = express()

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:["http://localhost:5000"],
        methods:["GET","POST"]
    }
})

const userSocketMap: { [key: string]: string } = {};

export const getReceiverSocketId = (receiverId: string): string | undefined => {
    return userSocketMap[receiverId];
};

io.on('connection',(socket)=>{
    console.log("user connected",socket.id)

    const userId = socket.handshake.query.userId as string;
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap))
    console.log("online users",userSocketMap)

    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
        console.log("online users after discconect",userSocketMap)
    })
})

export {app,io,server}