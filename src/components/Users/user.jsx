import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './user.module.css';




function User (props){

   
        let isFollowed = (props.followed) ?  'Follow' : 'Unfollow';
        let isFollowedButton = (props.followed) ?  classes.button_followed_true:classes.button_followed_false;

            let changeFollowedState = () => {

                (props.followed) ? props.changeToUnfollow(props.id) : props.changeToFollow(props.id);

            }
       
    


 return (   
  <div className={classes.button_section}>
      <div className={`${classes.button_to_click} ${classes.Comments}`}>

          
          <div className={classes.buttons_wrapper}>
            <div className={`${classes.button_to_click} ${classes.User_avatar}`} >
                <img src={props.img} />
                
            </div>
          </div>

         

          <div className={classes.textarea_coments}>
                <NavLink to='#' className={classes.User_name} activeClassName='activeName'>{props.name}  </NavLink>
                <div className={classes.User_message}>Status:{props.message}.</div> 
                <div className={classes.User_message}>From {props.location.city} / {props.location.country} .</div> 
                 
          </div>

        

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
