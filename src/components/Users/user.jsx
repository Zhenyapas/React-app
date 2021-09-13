import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './user.module.css';
import userPhoto from '../../assets/images/userFace.gif';




function User (props){
    
        let status = (props.u.status) ?  props.u.status : 'Not changed';
   
        let isFollowed = (props.u.followed) ?  'Follow' : 'Unfollow';
        let isFollowedButton = (props.u.followed) ?  classes.button_followed_true:classes.button_followed_false;

            let changeFollowedState = () => {

                (props.u.followed) ? props.changeToUnfollow(props.u.id) : props.changeToFollow(props.u.id);

            }
       
    


 return (   
  <div className={classes.button_section}>
      
      <div className={`${classes.button_to_click} ${classes.Comments}`}>

          
          <div className={classes.buttons_wrapper}>
            <div className={`${classes.button_to_click} ${classes.User_avatar}`} >
                <img  src={props.u.photos.small !=null ? props.u.img : userPhoto} />
                
            </div>
          </div>

         

          <div className={classes.textarea_coments}  >
                <NavLink   to={'/Messages/'+ props.u.id} className={classes.User_name} activeClassName='activeName'>{props.u.name}</NavLink>
                <div className={classes.User_message}>Status:{status}.</div> 
               {/*  <div className={classes.User_message}>From {props.location.city} / {props.location.country} .</div>  */}
                 
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
