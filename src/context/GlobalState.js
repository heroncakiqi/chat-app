import React, { useReducer } from 'react';


import getRandomColor from '../utils/getRandomColor';
import firestore from '../firebase';
import { 
  roomsReducer, 
  selectRoomReducer, 
  messagesReducer, 
  userReducer,
  loadingReducer,
  ADD_ROOMS, SELECT_ROOM, SET_MESSAGES, CLEAR_MESSAGES, SET_USER
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
    const  id = JSON.parse(localStorage.getItem('user'));
    console.log(!!id);
    if(id){
      const user = await firestore.collection('users').doc(id).get();
      setUser({type: SET_USER, payload: {id: user.id, ...user.data()}})
    }
  }

  const setSetUser = async user => {
    const userInfo = await firestore.collection('users').add({
      name: user,
      color: getRandomColor(1)[0]
    })
    const doc = await userInfo.get();
    setUser({type: SET_USER, payload: doc.id})
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
        setSetUser,
        getInitialUser
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default GlobalState;