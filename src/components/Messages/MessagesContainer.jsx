import React from 'react';
import Messages from './Messages';
import './Messages.css';








function MessagesContainer(props) {

   
    let addMessage = () =>{
      props.dispatch({type:'ADD-MESSAGE'})
    };
    let changeTextarea = (text) => {
        
        props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newMessageText: text});
    };

    return(
        <Messages state={props.state} changeMessageTextarea={changeTextarea} addMessage={addMessage}/>
    
    );
}
export default MessagesContainer;