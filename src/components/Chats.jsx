import React from 'react';

const Chats = () => {
    return (
        <div className="chats">
     
        <div
          className="userChat">
          <img src="https://i.ibb.co/rQ35nKP/istockphoto-1354893114-612x612.jpg" alt="logo" />
          <div className="userChatInfo">
            <span>displayName</span>
            <p>lastMessage?.text</p>
          </div>
        </div>
    </div>
    );
};

export default Chats;