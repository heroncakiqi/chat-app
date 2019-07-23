import React from 'react';
import Avatar from 'react-avatar';


const Message = ({ item }) => {
  const date = new Date(item.date)
  const hour = date.getHours();
  const min = date.getMinutes();

  return (
    <div className='message'>
    <div className='profile-picture'>
      <Avatar 
        color={item.author.color}
        name={item.author.name} 
        size="40"
        round="20px" 
      />
    </div>
      <div>
        <span className='author'>{item.author.name}</span> | <span className='author'>{`${hour}:${min}`}</span>
        <br/>
        <span className='message-text'>{item.text}</span>
      </div>
    </div>
  )
}

export default Message;

