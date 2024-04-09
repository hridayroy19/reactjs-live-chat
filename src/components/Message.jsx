import React from 'react';

const Message = () => {
    return (
        <div
        className="message"
      >
        <div className="messageInfo">
          <img
            src='https://i.ibb.co/rQ35nKP/istockphoto-1354893114-612x612.jpg'
            alt=""
          />
          <span>just now</span>
        </div>
        <div className="messageContent">
          <p>messagetext</p>
           <img src="https://i.ibb.co/rQ35nKP/istockphoto-1354893114-612x612.jpg" alt="" />
        </div>
      </div>
    );
};

export default Message;