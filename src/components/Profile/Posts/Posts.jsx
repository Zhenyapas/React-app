import React from 'react';
import './Posts.css';


function Posts(props) {
    let newPostElement=React.createRef();
    let addPost = () => {
        
         props.dispatch({type:'ADD-POST'});
        
        
    }
    let changeTextarea = () => {
       let text=newPostElement.current.value;
      
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text});

    }
    return (
        <form>
            <div class="textarea_section">
                <textarea  ref={newPostElement} onChange={changeTextarea} value={props.state.profilePage.textareaPosts} className="textarea_1"  placeholder="What's on your mind?">
              
                </textarea>
            </div>

            <div className='button_section'>
                <div className='button_to_click File'>Add File</div>
                <div className='button_to_click Post' onClick={addPost}>Add Post</div>
            </div>

           
          
        </form> 
    );
}

export default Posts;