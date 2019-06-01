import React, { useState } from 'react';

import { Context } from '../context/GlobalState';

const Username = props => {
  return (
      <Context.Consumer>
        {context => 
          <div className="username">
            {context.user}
          </div>
        }
      </Context.Consumer>
  )
}

export default Username;