import React from 'react';
import './Posts.css';


function Posts(props) {
    let newPostElement=React.createRef();
    let addPost = () => {
        let text=newPostElement.current.value;
         props.state.func.addPost1(text);
         newPostElement.current.value='';
        
    }
    return (
        <form>
            <div class="textarea_section">
                <textarea  ref={newPostElement}  className="textarea_1"  placeholder="What's on your mind?">
              
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