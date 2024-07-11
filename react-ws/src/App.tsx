import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [latestMessage, setLatestMessage] = useState("")
  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = ()=> {
      console.log('Connected')
      setSocket(socket)
    }
    socket.onmessage = (message) => {
      console.log("Recived message",message.data)
      setLatestMessage(message.data)
    }
    // setSocket(socket)
  },[])



  if(!socket){
    return <div>
      Loading..
    </div>
  }

  return (
    <>
     <input></input>
     <button onClick={()=>{
      socket.send('Kya be lawde')
     }}>Send</button>
     {latestMessage} 
    </>
  )
}

export default App
