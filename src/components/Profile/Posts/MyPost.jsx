import React from 'react';
import classes from './MyPost.module.css';



function MyPost(props) {

    return(
     <div className={classes.Content} >
        <div className={classes.textarea_section}>
            <div className={classes.textarea_1} >{props.posts}</div>
        </div>

        <div className={classes.button_section}>
         
                
            
            <div className={`${classes.button_to_click} ${classes.Delete}`}>Delete</div>
            <div className={`${classes.button_to_click} ${classes.File}`}>Likes {props.likes}</div>
        </div>
    
    </div>

    );
}

export default MyPost;