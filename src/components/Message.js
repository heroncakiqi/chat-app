import React from 'react';

const Message = ({ item }) => {
  const date = new Date(item.date)
  const hour = date.getHours();
  const min = date.getMinutes();
  return (
    <div className='message'>
      <span className='author'>{item.author}</span> | <span className='author'>{`${hour}:${min}`}</span>
      <br/>
      <span className='message-text'>{item.text}</span>
    </div>
  )
}

export default Message;

