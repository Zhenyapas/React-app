import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Messages from './Messages';
import './Messages.css';


let mapStateToProps = (state) => {
    return {

        infoData : state.dialogsPage.infoData,
        messageData4: state.dialogsPage.messageData4,
        textareaDialog:state.dialogsPage.textareaDialog,
        isAuth:state.auth.isAuth

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


export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Messages);
