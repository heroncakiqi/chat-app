import React,{  useContext,useEffect } from 'react';
import firestore from '../firebase';

import Message from './Message';
import { Context } from '../context/GlobalState';

const ChatWindow = props => {
  const {messages} = useContext(Context);
  useEffect(() => {
    const element = document.getElementById("window");
    element.scrollTop = element.scrollHeight;
  })
  return (
    <div className="chat-window" id='window'>
      {messages.map(item => <Message item={item} />)}
    </div>
  )
}


export default ChatWindow