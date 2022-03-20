import React from 'react'
import './Sidebar.css'
import { IconButton, Avatar } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <div className="sidebar__headerLeft">
                    <Avatar alt = "DP" src = "https://avatars.githubusercontent.com/u/69284082?s=400&u=4878a918d02ad01fc06ab60244f5309a980ebd36&v=4"/>
            </div>

            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>

        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlinedIcon />
                <input placeholder = "Search or Start new Chat" type="text" />
            </div>
        </div>

        <div className="sidebar__chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar