import React from 'react';
import './Posts.css';


function Posts(props) {
    console.log('RENDER!')
    let newPostElement=React.createRef();
    let addPost = () => {
        
        props.addPost();
       
        
        
    }
    let changeTextarea = () => {
       let text=newPostElement.current.value;
       props.updateNewPostText(text);
      
      

    }
    return (
        <form>
            <div class="textarea_section">
                <textarea  ref={newPostElement} onChange={changeTextarea} value={props.textareaPosts} className="textarea_1"  placeholder="What's on your mind?">
              
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