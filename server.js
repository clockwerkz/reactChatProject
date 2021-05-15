const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "https://example.com",
      methods: ["GET", "POST"]
    }
  });

const PORT = 5000;

app.get('/test', (req, res)=>{
    return res.send("Successfully pinged test route");
})


io.on('connection', () => { 
    console.log("Successfully connected to the socket server...")
 });

server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}...`);
})