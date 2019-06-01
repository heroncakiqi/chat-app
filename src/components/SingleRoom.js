import React, { useContext } from 'react';

import { Context } from '../context/GlobalState';

const SingleRoom = (props) => {

  const { selectRoom,clearMessages } = useContext(Context);

  const handleClick = () => {
    clearMessages();
    selectRoom(props.id);
  }

return (
  <div onClick={() => handleClick()} className='single-room'>
    {`#${props.children}`}
  </div>
)
}

export default SingleRoom