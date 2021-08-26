import React from 'react';
import MyPost from './Posts/MyPost.jsx';
import Posts from './Posts/Posts.jsx';
import './Profile.css';

  
  
function Profile(props) {
  
  let my_post=props.state.getState().postInfo.map( (el) => <MyPost likes={el.likes} posts={el.post}/>);
  
    return(

    <section>
        <div className='Content'>Hello, {props.state.getState().myName.name}. Whats new?</div>

        <Posts state={props.state} dispatch={props.dispatch} />
      
        

          {my_post}

       
        
       
       
      <div className='Profile_footer'></div>
    </section>    

    );
}
export default Profile;