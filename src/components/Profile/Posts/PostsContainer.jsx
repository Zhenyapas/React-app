import React from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';


let mapStateToProps = (state) => {
    return{
        
        textareaPosts:state.profilePage.textareaPosts


    }

}
let mapDispatchToProps = (dispatch) => {
    return{
        
        updateNewPostText : (text) => {
             dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text});
        },   
        addPost : () =>{
             dispatch({type:'ADD-POST'})
        }
    }

}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);
 

export default PostsContainer;