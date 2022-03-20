import React, { useState } from "react";
import "./Chat.css";
import { IconButton, Avatar } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import axios from "./axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "Adarsh",
      timestamp: "Just now",
      received: true,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          alt="DP"
          src="https://i.ytimg.com/vi/Ee2x1FELwzc/maxresdefault.jpg"
        />
        <div className="chat__headerInfo">
          <h3>Adi</h3>
          <p style={{ color: "gray" }}>Last seen just now</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <CallIcon />
          </IconButton>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.received && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__time">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send
          </button>
          <MicIcon />
        </form>
      </div>
    </div>
  );
}

export default Chat;
