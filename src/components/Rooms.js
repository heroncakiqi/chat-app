import React, {useEffect ,useContext } from 'react';

import { Context } from '../context/GlobalState';
import SingleRoom from './SingleRoom';

const Rooms = props => {
  const { rooms, addRooms } = useContext(Context);
  useEffect(() => {
    addRooms();
  },[])
  return (
        <div className='rooms-column'>
          {rooms.map(item => <SingleRoom id={item.id} key={item.id}>{item.name}</SingleRoom>)}
        </div>
  )
}

export default Rooms;