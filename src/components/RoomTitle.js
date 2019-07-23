import React from 'react';

import { Context } from '../context/GlobalState';

const RoomTitle = props => {

  return (
    <Context.Consumer>
        {context => 
          <div className='room-title'>
            {context.openRoom.name || 'Chat App'}
          </div>
        }
    </Context.Consumer>
  )
}

export default RoomTitle;