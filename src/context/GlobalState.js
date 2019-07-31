import React, { useReducer } from 'react';

import getRandomColor from '../utils/getRandomColor';
import firestore from '../firebase';
import { 
  roomsReducer, 
  selectRoomReducer, 
  messagesReducer, 
  userReducer,
  loadingReducer,
  ADD_ROOMS, SELECT_ROOM, SET_MESSAGES, CLEAR_MESSAGES, SET_USER, SWITCH_LOADING
} from './reducers';

export const Context = React.createContext();

const GlobalState = ({ children }) => {
  // set global state
  const [loading, setLoading] = useReducer(loadingReducer, true);
  const [user, setUser] = useReducer(userReducer, null);
  const [roomsState, setRooms] = useReducer(roomsReducer, []);
  const [openRoom, setOpenRoom] = useReducer(selectRoomReducer, {});
  const [messages, setMessages] = useReducer(messagesReducer, []);

  const getInitialUser = async () => {
    const id = localStorage.getItem('user');
    if(id){
      const user = await firestore.collection('users').doc(id).get();
      setUser({type: SET_USER, payload: {id: user.id, ...user.data()}});
    }
    setLoading({type: SWITCH_LOADING, payload: false});
  }

  const createUser = async user => {
    setLoading({type: SWITCH_LOADING, payload: true});
    const userInfo = await firestore.collection('users').add({
      name: user,
      color: getRandomColor(1)[0]
    })
    const doc = await userInfo.get();
    setUser({type: SET_USER, payload: {id: doc.id, ...doc.data()}});
    setLoading({type: SWITCH_LOADING, payload: false});
  }

  // define actions
  const addRooms = (rooms) => {
    firestore.collection('rooms').onSnapshot((snapshot) => {
      const changes = snapshot.docChanges();
      const snapArray = changes.map(item => ({id: item.doc.id, name: item.doc.data().name}));
      setRooms({type: ADD_ROOMS, rooms: snapArray})
    });
  }

  const selectRoom = id => {
    const room = roomsState.find(item => item.id === id);
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

  const sendMessage = async input => {
    firestore.collection('rooms').doc(openRoom.id).collection('messages').add({
      author: user,
      text: input,
      date: Date.now()
    })
  }

  return (
    <Context.Provider
      value={{
        loading,
        user,
        rooms: roomsState,
        openRoom,
        addRooms,
        addSingleRoom,
        selectRoom,
        messages,
        sendMessage,
        clearMessages,
        setMessagesReducer,
        createUser,
        getInitialUser
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default GlobalState;