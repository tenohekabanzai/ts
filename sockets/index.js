const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();

const server = http.createServer(app);

const io = socketIo(server);

app.use(express.static('public'));

const users = new Set();

io.on("connection",(socket)=>{
    console.log('A user is now connected');

    // handle users on joining chat
    socket.on('join',(userName)=>{
        users.add(userName);
        io.emit('user joined',userName);
    })

    //Send the updated user
    io.emit('userList',Array.from(users));


})

server.listen(4001,()=>{
    console.log("App running at port 4001");
})