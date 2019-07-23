import React, {useContext} from 'react';

import { Context } from '../context/GlobalState';
import ChatWindow from './ChatWindow';

const Screen = props => {
  const {openRoom} = useContext(Context);
  return (
    <div id='window'>
      {openRoom.id ? <ChatWindow/> : <h1 className="select-channel">← Select a Channel</h1>}
    </div>
  )
} 


export default Screen;