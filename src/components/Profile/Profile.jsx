import React from 'react';
import MyPost from './Posts/MyPost.jsx';
import Posts from './Posts/Posts.jsx';
import './Profile.css';

  
  
function Profile(props) {
  
  let my_post=props.state.postInfo.map( (el) => <MyPost likes={el.likes} posts={el.post}/>);
  
    return(

    <section>
        <div className='Content'>Hello, {props.state.myName.name}. Whats new?</div>

        <Posts state={props.state} addPost={props.addPost}/>
      
        

          {my_post}

       
        
       
       
      <div className='Profile_footer'></div>
    </section>    

    );
}
export default Profile;