import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

import App from './components/App';
import Welcome from './components/Welcome';
import Loading from './components/Loading';
import GlobalState, { Context } from './context/GlobalState';

const Index = props => {
  const { loading, user, getInitialUser } = useContext(Context);

  useEffect(() => {
    getInitialUser();
  },[])

  return (
    <div className="App">
    {loading ? <Loading/> : user ? <App/> : <Welcome/>}
    </div>
  )
}

ReactDOM.render(<GlobalState><Index /></GlobalState>, document.getElementById('root'));
