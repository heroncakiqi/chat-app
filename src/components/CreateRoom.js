import React, { useState, useContext } from 'react';

import { Context } from '../context/GlobalState';

const CreateRoom = props => {
  const [ input, setInput ] = useState('');
  const { addSingleRoom } = useContext(Context);

  const handleSubmit = e => {
    e.preventDefault();
    if(input.length > 2){
      addSingleRoom(input);
      setInput('');
    }
  }
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          onChange={e => setInput(e.target.value)} 
          placeholder="Create a room" 
          type="text" 
          value={input}/>
      </form>
    </div>
  )
}

export default CreateRoom;