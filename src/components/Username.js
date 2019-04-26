import React, { useState } from 'react';

import { Context } from '../context/GlobalState';

const Username = props => {
  return (
    <div>
      <Context.Consumer>
        {context => context.user}
      </Context.Consumer>
    </div>
  )
}

export default Username;