import React from 'react';
import Posts from './Posts';


function PostsContainer(props) {
    
    let addPost = () => {
        
         props.dispatch({type:'ADD-POST'});
        
        
    }
    let changeTextarea = (text) => {
      
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text});

    }
    return (
        <Posts updateNewPostText={changeTextarea} addPost={addPost} state={props.state} />
    );
}

export default PostsContainer;