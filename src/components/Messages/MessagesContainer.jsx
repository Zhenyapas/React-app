import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import './Messages.css';


let mapStateToProps = (state) => {
    return {

        infoData : state.dialogsPage.infoData,
        messageData4: state.dialogsPage.messageData4,
        textareaDialog:state.dialogsPage.textareaDialog

    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        changeMessageTextarea: (text) => {

           dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newMessageText: text});

        }, 
        addMessage: () => {

           dispatch({type:'ADD-MESSAGE'})

        }
    }
};
const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);

export default MessagesContainer;