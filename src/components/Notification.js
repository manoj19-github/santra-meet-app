import React,{useContext} from 'react'
import {Button} from "@material-ui/core"
import {SocketContext}
from "../SocketContext"

function Notification() {
  const {answerCall,call,callAccepted}=useContext(SocketContext)
  return (
    <>
      {call?.isReceivedCall && !callAccepted && (
        <div styles={{display:"flex",justifyContent:"center"}}>
          <h1>{call.name }  is calling ....</h1>
          <Button
          color="primary"
          variant="contained"
          onClick={answerCall}
          >Answer
          </Button>

        </div>
      )}
    </>
  )
}

export default Notification
