import React from 'react';
import MyPost from './Posts/MyPost.jsx';
import PostsContainer from './Posts/PostsContainer.js';
import loader from '../../assets/images/loader.svg';
import './Profile.css';
import Status from './Status/Status.jsx';
import StatusWithHooks from './Status/StatusWithHooks.jsx';
import PhotoWithHooks from './Photo/PhotoWithHooks.jsx';


  
  
function Profile(props) {
  
  let my_post=props.postInfo.map( (el) => <MyPost likes={el.likes} posts={el.post}/>);
 
    if(!props.profile.photos) {
      return <img className='loader' src={loader}></img>
    }
    
    return(

    <section>
        
       <PhotoWithHooks {...props} />
       <StatusWithHooks  {...props} />
        
        <div className='Content'>Hello, {props.profile.fullName}. Whats new?</div>
        <div className='Content'>{props.profile.contacts.instagram}</div>

        
        {(props.isMainUser) &&  <PostsContainer />}

      
        

          {my_post}

       
        
       
       
      <div className='Profile_footer'></div>
    </section>    

    );
}
export default Profile;