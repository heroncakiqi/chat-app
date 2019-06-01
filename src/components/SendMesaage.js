import React, { useContext, useState } from 'react';

import { Context } from '../context/GlobalState';

const SendMessage = props => {

  const [input, setInput] = useState('');
  const { openRoom, sendMessage } = useContext(Context);

  const handleSubmit = e => {
    e.preventDefault();
    if(input !== ''){
      sendMessage(input);
      setInput('');
    }
  }

  return (
      <form onSubmit={e => handleSubmit(e)} className='text-box'>
        <input 
          disabled={!openRoom.hasOwnProperty('id')} 
          type="text"
          placeholder="Send message"
          value={input}
          onChange={e => setInput(e.target.value)}
        /> 
        <button>send</button>
      </form>
  )

}

export default SendMessage