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
  return openRoom.hasOwnProperty('id') ? (
      <form onSubmit={e => handleSubmit(e)} className='text-box'>
        <input  
          type="text"
          placeholder="Send message"
          value={input}
          onChange={e => setInput(e.target.value)}
        /> 
        <button id="send-button"></button>
      </form>
  )
: <div className='text-box'></div>
}

export default SendMessage