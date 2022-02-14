import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';





function Navigation(props) {


    const logOut = () => {
        props.LogOut();
    }

    let photo;
   
     if (props.photo && props.isAuth) photo=[<img src={props.photo.small}></img>];

     

  
   
    return(
        <nav>
            <div className = {classes.nav_avatar}>{photo}</div>
            
            
            { (props.isAuth == true ) ?  <div className = {classes.nav_profile_name}>{props.name}</div> :
           <div className = {classes.nav_profile_name}><NavLink to = '/login' activeClassName={classes.active}>Sign in</NavLink></div> }
            <div className = {classes.nav_links}>
                <div  className={classes.item}><NavLink to = {'/Profile/' + props.meUserId} activeClassName={classes.active}>Profile</NavLink><span ></span></div>
                <div className={classes.item}><NavLink to = '/Messages' activeClassName={classes.active}>Messages</NavLink><span className = {classes.span_active}>{props.countMessages}</span></div>
               <div className={classes.item}><NavLink to = '/Users' activeClassName={classes.active}>Users</NavLink><span className = {classes.span_active}></span></div>
              <div className={classes.item}><a hreff= '#' >Music</a><span ></span></div>
             
            </div>
            { (props.isAuth) && <div className = {classes.nav_profile_logout}><NavLink to = '/login' onClick={logOut} activeClassName={classes.active}>Log out</NavLink></div> }
        </nav>
    );
}

export default Navigation;
