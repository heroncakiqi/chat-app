import React from 'react';
import Avatar from 'react-avatar';

import { Context } from '../context/GlobalState';

const Username = props => {
  return (
      <Context.Consumer>
        {context => 
          <div className="username">
          <div className="profile-picture">
            <Avatar 
              color={context.user.color} 
              name={context.user.name} size="40" 
              round="20px"
            />
          </div>
           {context.user.name}
          </div>
        }
      </Context.Consumer>
  )
}

export default Username;