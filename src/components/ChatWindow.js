import React,{  useContext,useEffect } from 'react';
import firestore from '../firebase';

import Message from './Message';
import { Context } from '../context/GlobalState';

const ChatWindow = props => {
  const {messages, setMessagesReducer, openRoom} = useContext(Context);
  
  useEffect(() => {
    const unsubscribe = firestore.collection('rooms').doc(openRoom.id).collection('messages')
    .orderBy('date').onSnapshot(async snapshot => {
      const changes = snapshot.docChanges();
      const messagesArray = changes.map(item => item.doc.data());
      console.log(messagesArray)
      setMessagesReducer(messagesArray, () => {
        const element = document.getElementById("window");
        element.scrollTop = element.scrollHeight
      });
    });
    return () => {
      unsubscribe();
    }
  },[openRoom]);

  return (
    <div className="chat-window">
      {messages.map((item, index) => <Message key={index} item={item} />)}
    </div>
  )
}


export default ChatWindow