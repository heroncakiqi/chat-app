import React, { useState, useEffect, useReducer } from 'react';

import db from '../firebase';
import { roomsReducer, selectRoomReducer, ADD_ROOMS, SELECT_ROOM } from './reducers';

export const Context = React.createContext();

const GlobalState = ({ children }) => {
  // set global state
  const [user, setUser] = useState(localStorage.getItem('user') || null);
  //
  const [roomsState, setRooms] = useReducer(roomsReducer, []);

  const [openRoom, setOpenRoom] = useReducer(selectRoomReducer, {});

  // define actions
  const addRooms = (rooms) => {
    db.collection('rooms').onSnapshot((snapshot) => {
      const changes = snapshot.docChanges();
      const snapArray = changes.map(item => ({id:item.doc.id, name: item.doc.data().name}));
      setRooms({type: ADD_ROOMS, rooms: snapArray})
    });
  }

  const selectRoom = id => {
    db.collection('rooms').doc(id).collection('messages').onSnapshot((snapshot) => {
      const changes = snapshot.docChanges();
      const data = changes[0] ? changes[0].doc.data() : {};
      setOpenRoom({type: SELECT_ROOM, payload: data});
    })
  }

  const addSingleRoom = (name) => {
    db.collection('rooms').add({
      name
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
        selectRoom
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default GlobalState;