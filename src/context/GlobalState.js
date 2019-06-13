import React, { useState, useEffect, useReducer } from 'react';

import firestore from '../firebase';
import { 
  roomsReducer, 
  selectRoomReducer, 
  messagesReducer, 
  ADD_ROOMS, SELECT_ROOM, SET_MESSAGES, CLEAR_MESSAGES
} from './reducers';

export const Context = React.createContext();

const GlobalState = ({ children }) => {
  // set global state
  const [user, setUser] = useState(localStorage.getItem('user') || null);

  const [roomsState, setRooms] = useReducer(roomsReducer, []);

  const [openRoom, setOpenRoom] = useReducer(selectRoomReducer, {});

  const [messages, setMessages] = useReducer(messagesReducer, []);


  // define actions
  const addRooms = (rooms) => {
    firestore.collection('rooms').onSnapshot((snapshot) => {
      const changes = snapshot.docChanges();
      const snapArray = changes.map(item => ({id:item.doc.id, name: item.doc.data().name}));
      setRooms({type: ADD_ROOMS, rooms: snapArray})
    });
  }

  const selectRoom = id => {
    const room = roomsState.find(item => item.id == id);
    setOpenRoom({type: SELECT_ROOM, payload: room});
  }


  const setMessagesReducer = (messageArray, cb) => {
    setMessages({type: SET_MESSAGES, payload: messageArray});
    cb();
  }
  
  const clearMessages = () => {
    setMessages({type: CLEAR_MESSAGES});
  }

  const addSingleRoom = (name) => {
    firestore.collection('rooms').add({
      name
    })
  }

  const sendMessage = input => {
    firestore.collection('rooms').doc(openRoom.id).collection('messages').add({
      author: user,
      text: input,
      date: Date.now()
    })
  }

  return (
    <Context.Provider
      value={{
        user,
        rooms: roomsState,
        openRoom,
        addRooms,
        addSingleRoom,
        selectRoom,
        messages,
        sendMessage,
        clearMessages,
        setMessagesReducer
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default GlobalState;