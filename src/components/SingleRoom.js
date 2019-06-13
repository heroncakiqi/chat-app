import React, { useContext } from 'react';

import { Context } from '../context/GlobalState';

const SingleRoom = (props) => {

  const { selectRoom,clearMessages, openRoom } = useContext(Context);

  const handleClick = () => {
    if(openRoom.id !== props.id){
      clearMessages();
      selectRoom(props.id);
    }
  }

return (
  <div onClick={() => handleClick()} className='single-room'>
    {`#${props.children}`}
  </div>
)
}

export default SingleRoom