import React from 'react';
import './Posts.css';


function Posts() {
    return (
        <form>
            <div class="textarea_section">
                <textarea className="textarea_1"  placeholder="What's on your mind?">
                </textarea>
            </div>

            <div className='button_section'>
                <div className='button_to_click File'>Add File</div>
                <div className='button_to_click Post'>Add Post</div>
            </div>

           
          
        </form> 
    );
}

export default Posts;