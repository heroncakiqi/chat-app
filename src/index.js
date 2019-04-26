import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

import App from './components/App';
import Welcome from './components/Welcome';
import GlobalState, { Context } from './context/GlobalState';

const Index = props => {

  const { user } = useContext(Context);
  
  return (
    <div className="App">
        {user ? 
          <App /> : 
          <Welcome/>
        }
    </div>
  )
}

ReactDOM.render(<GlobalState><Index /></GlobalState>, document.getElementById('root'));
