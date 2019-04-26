import React, { useContext } from 'react';

import { Context } from '../context/GlobalState';

const SingleRoom = (props) => {

  const { selectRoom } = useContext(Context);

  const handleClick = () => {
    selectRoom(props.id)
  }

return (
  <div onClick={() => handleClick()}>
    {props.children}
  </div>
)
}

export default SingleRoom