import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './user.module.css';
import userPhoto from '../../assets/images/userFace.gif';
import * as axios from 'axios'; 
import { usersAPI } from '../../api/api';




function User (props){
    
        let status = (props.u.status) ?  props.u.status : 'Not selected';
   
        let isFollowed = (props.u.followed) ?  'Unfollow' : 'Follow';
        let isFollowedButton = (props.u.followed) ?  classes.button_followed_false:classes.button_followed_true;

            let changeFollowedState = () => {

                if(props.u.followed) { 
                  
                 
                 usersAPI.unfollowUser(props.u.id)
                  .then(data => {
                     
                      if (data.resultCode === 0) {
                        props.changeToUnfollow(props.u.id)
                      }
                     });}
                 
          
                else {

                  usersAPI.followUser(props.u.id)
                  .then(data => {
                    
                    
                     
                      if (data.resultCode === 0) {
                        props.changeToFollow(props.u.id)
                      }
                     });
                    /*  props.changeToFollow(props.u.id) */
                }       
                
                

            }
       let nav= React.createRef();
     


 return (   
  <div className={classes.button_section}>

      <div className={`${classes.button_to_click} ${classes.Comments}`}>
      <NavLink to={'/Profile/'+ props.u.id} className={`${classes.button_to_click_nav_link} ${classes.CommentsNavLink}`}>

          
          <div className={classes.buttons_wrapper}>
            <div className={`${classes.button_to_click} ${classes.User_avatar}`} >
                <img  src={props.u.photos.small !=null ? props.u.photos.small : userPhoto} />
                
            </div>
          </div>

         

          <div className={classes.textarea_coments}  >
                <NavLink  ref={nav} to={'/Profile/'+ props.u.id} className={classes.User_name} activeClassName='activeName'>{props.u.name}</NavLink>
                <div className={classes.User_message}>Status:{status}.</div> 
               {/*  <div className={classes.User_message}>From {props.location.city} / {props.location.country} .</div>  */}
                 
          </div>

        
        </NavLink>

          <div className={classes.buttons_wrapper}>
            <div onClick={changeFollowedState}  className={`${classes.button_to_click} ${isFollowedButton}`} >
               {isFollowed}
            </div>
          </div>
          
        </div>
         
 
  </div>  
 );

}

export default User;
