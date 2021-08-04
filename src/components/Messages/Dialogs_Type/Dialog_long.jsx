import React from 'react';
import classes from './Dialog_long.module.css';

function Dialog_long (props){
 return (   
  <div className={classes.button_section}>
      <div className={`${classes.button_to_click} ${classes.Comments}`}>

          
          <div className={classes.buttons_wrapper}>
            <div className={`${classes.button_to_click1} ${classes.Delete}`} >
                <img src={props.img} />
            </div>
          </div>

          <div className={classes.textarea_coments}>
                <div className={classes.User_name}>{props.name}  :</div>
                <div className={classes.User_message}>{props.message} </div>  
          </div>

      </div>
  </div>  
 );

}

export default Dialog_long;
