import React, { useState, useContext } from 'react'
import { Context } from '../context/GlobalState';

const Welcome = props => {

  const [input, setInput] = useState('');

  const {createUser} = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.length > 2){
      createUser(input);
    }
  }

    return (
      <div className="enter-screen">
        <form className="enter-form" onSubmit={e => handleSubmit(e)}>
          <h3>Enter your username</h3>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            type="text"
          />
        </form>
      </div>
    )
}

export default Welcome;