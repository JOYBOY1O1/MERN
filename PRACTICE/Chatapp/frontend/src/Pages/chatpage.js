import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {

    const [chats, setchats] = useState([]);
    const fetchchats = async() => {
        const {data} = await axios.get('/api/chat');
        setchats(data);
    }

    useEffect(() => {
        fetchchats();
    },[]);

return ( <div> {chats.map()} </div> )
}

export default ChatPage
