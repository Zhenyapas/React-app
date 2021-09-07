import React from 'react';
import MyPost from './Posts/MyPost.jsx';
import PostsContainer from './Posts/PostsContainer.jsx';
import './Profile.css';

  
  
function Profile(props) {
  
  let my_post=props.postInfo.map( (el) => <MyPost likes={el.likes} posts={el.post}/>);
  
    return(

    <section>
        <div className='Content'>Hello, {props.name}. Whats new?</div>

        <PostsContainer  />
      
        

          {my_post}

       
        
       
       
      <div className='Profile_footer'></div>
    </section>    

    );
}
export default Profile;