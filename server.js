const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

const PORT = 5000;

app.get('/test', (req, res)=>{
    return res.send("Successfully pinged test route");
})


io.on('connection', (socket) => { 
    console.log("Successfully connected to the socket server...")
    socket.join("Chat-Room")
    io.to("Chat-room").emit(`${socket.id} has joined.`);
 });

server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}...`);
})