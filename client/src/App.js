import React from 'react';
import './App.css';

const io = require("socket.io-client");
const socket = io("http://localhost:5000");

function App() {
  socket.on("connect",()=>{
    console.log("Connected to the socket backend");
  })
  return (
    <div className="App">
      <h1>Chat Program</h1>
    </div>
  );
}

export default App;
