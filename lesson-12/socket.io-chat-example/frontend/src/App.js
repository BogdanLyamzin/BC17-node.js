import { useState, useEffect, useCallback } from "react";
import io from "socket.io-client";

import {nanoid} from "nanoid";

import Chat from "./components/Chat/Chat";
import ChatForm from "./components/ChatForm/ChatForm";
import SigninChatForm from "./components/SigninChatForm/SigninChatForm";

import './App.css';

const socket = io.connect("http://localhost:5000")

function App() {
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(()=> {
    // socket.on("connect", ()=> {
    //   console.log("Success connect");
    // })
    socket.on("chat-message", (message)=> {
      setMessages(prevMessages => {
        const newMessage = {
          type: "user",
          message,
          id: nanoid()
        };
  
        return [...prevMessages, newMessage]
      })
    })
  }, [])

  const addName = useCallback(({name}) => setName(name), []);

  const addMessage = ({message}) => {
    setMessages(prevMessages => {
      const newMessage = {
        type: "you",
        message,
        id: nanoid()
      };

      return [...prevMessages, newMessage]
    })

    socket.emit("chat-message", message)

  }

  return (
    <div className="App">
      {!name && <SigninChatForm onSubmit={addName} />}
      {name && <ChatForm onSubmit={addMessage}  />}
      <Chat items={messages}  />
    </div>
  );
}

export default App;
