import React from 'react';

import Username from './Username';
import RoomTitle from './RoomTitle';
import Rooms from './Rooms';
import CreateRoom from './CreateRoom';
import SendMessage from './SendMesaage';
import Screen from './Screen';

const App = props => {
  return (
    <div className="container">
        <Username/>
        <RoomTitle/>
        <Rooms/>
        <Screen/>
        <CreateRoom/>
        <SendMessage/>
    </div>
  )
}

export default App;