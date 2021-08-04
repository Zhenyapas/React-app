import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialog_short.module.css';




function Dialog_short (props){


let a = '/Messages/'+ props.id;
 return (   
  <div className={classes.button_section}>
      <div className={`${classes.button_to_click} ${classes.Comments}`}>

          
          <div className={classes.buttons_wrapper}>
            <div className={`${classes.button_to_click} ${classes.User_avatar}`} >
                <img src={props.img} />
            </div>
          </div>

          <div className={classes.textarea_coments}>
                <NavLink to={'/Messages/'+ props.id} className={classes.User_name} activeClassName='activeName'>{props.name}  :</NavLink>
                <div className={classes.User_message}>{props.message} </div>  
          </div>

      </div>
  </div>  
 );

}

export default Dialog_short;
