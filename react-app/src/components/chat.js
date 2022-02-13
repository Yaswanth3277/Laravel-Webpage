import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import TextField from "@material-ui/core/TextField"
import {useHistory} from "react-router-dom";

const socket = io('http://localhost:7000')

let previous = localStorage.getItem("winname")
console.log(previous)

function Chat() {

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])

  let history = useHistory();

  useEffect(()=>{
    socket.on('message', payload=>{
      setChat([...chat, payload])
    })
  })

  const sendMessage=(e)=>{
    e.preventDefault();
    console.log(message)
    socket.emit('message',{name, message})
    setMessage('')
  }

  function redirectwindow(){
	if(previous === "Resident"){
		history.push('/resident')
	}
	else if(previous === "Manager"){
		history.push('/manager')
	}
	else if(previous === "Visitor"){
		history.push('/visitor')
	}
  else if(previous === "Admin"){
		history.push('/admin')
	}
	else{
		history.push("/")
	}
  }
  return (
    <div className="card">
      <form id='chat-form'>
        <h1 id="chat-headers">Chat Box</h1>
        <div className="name-field">
					<TextField name="name" value={name} onChange={(e)=>{setName(e.target.value)}} label="Name" />
				</div>
        <div>
        <TextField type="text" name="message" placeholder="your message" value={message} onChange={(e)=>{setMessage(e.target.value)}} id="outlined-multiline-static" variant="outlined" label="Message"></TextField>
        </div>
        <button id="chat-button" type='submit' onClick={sendMessage}>Send</button>
		<button id="chat-button" onClick={redirectwindow}>Close</button>

      </form>
      <div className="render-chat">
        <h1 id="chat-headers">Chat</h1>
        {chat.map((payload, index)=>{
          return(
            <h3 id="message-display">{payload.name}:<span id="chat-span">{payload.message}</span></h3>
          )
        })}
      </div>
    </div>
  );
}

export default Chat;
