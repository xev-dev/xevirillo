const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const { Server } = require("socket.io");
let socketCors = {
    cors: {
        origin: "http://localhost:8080"
    }
};
const io = new Server(server,socketCors);
io.on("connection", (socket) => {
    console.log("socket connection", socket.id);
    socket.emit('connected');
    // socket.on("disconnecting", () => {
        
    // });
    socket.on("disconnect", () => {
        console.log('user disconnected');
    });
})
server.listen(3000, () => {
    console.log('listening on *:3000');
});         