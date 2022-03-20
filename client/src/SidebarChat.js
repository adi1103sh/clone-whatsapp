import React from "react";
import "./SidebarChat.css";
import {Avatar} from "@mui/material";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar 
        alt="DP"
        src="https://th.bing.com/th/id/R.271a656c5b55fcc18479fa2270aec2e7?rik=2wQg340gWrMp1w&riu=http%3a%2f%2ftrendsinusa.com%2fwp-content%2fuploads%2f2018%2f01%2fMiniclip-8-Ball-Pool-Avatar-16.png&ehk=RWuXKvkmYWMlmwEKbxj2pBSfiVrpPKDbsh4iw7esPaA%3d&risl=&pid=ImgRaw&r=0"
      />
      <div className="sidebarChat__info">
        <h3>Room Name</h3>
        <p>Last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
