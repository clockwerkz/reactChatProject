import React, { useState, useEffect, useRef } from "react";
import "../../App.css";

const io = require("socket.io-client");

function ChatRoom() {
  // const socketRef = useRef();

  // useEffect(()=>{
  //   socketRef.current = io.connect("http://localhost:5000");
  //   socketRef.current.on("message", (data)=>{
  //     console.log(data);
  //   })
  //   return () => socketRef.current.disconnect();
  // }, []);

  // const handleButtonClick = () =>{
  //   console.log('clicked');
  //   socketRef.current.emit("message", {"Test_User1":"Hello from the front end"});
  // }

  return (
    <div className="App">
      <h1>Chat Program</h1>
      <p>Test</p>
    </div>
  );
}

export default ChatRoom;
