import React, { useState, useEffect, useContext } from 'react';

import { Context } from '../context/GlobalState';
import Username from './Username';
import RoomTitle from './RoomTitle';
import Rooms from './Rooms';
import ChatWindow from './ChatWindow'
import CreateRoom from './CreateRoom';
import SendMessage from './SendMesaage';

const App = props => {
  return (
    <div className="container">
        <Username/>
        <RoomTitle/>
        <Rooms/>
        <ChatWindow/>
        <CreateRoom/>
        <SendMessage/>
    </div>
  )
}

export default App;