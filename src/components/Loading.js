import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';
// Another way to import
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: #0bf5de;
    align-self: center;
`;
 
class Loading extends React.Component {
  render() {
    return (
      <div className='sweet-loading' style={{height: '100vh', display: 'flex'}}>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
        />
      </div> 
    )
  }
}

export default Loading;