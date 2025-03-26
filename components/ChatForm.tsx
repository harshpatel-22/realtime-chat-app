"use client";

import React, { useState } from "react";

const ChatForm = ({onSendMessage} : {onSendMessage : (message:string) => void}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim() !== "") {  
      onSendMessage(message);    
      setMessage("");       
    }
    console.log("submitted ");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex mt-4 gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none"
          placeholder="Type your texts here...."
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-blue-500 text-white"
          // onClick={onSendMessage(message)}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
