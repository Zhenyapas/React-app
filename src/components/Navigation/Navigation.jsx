import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';




function Navigation(props) {
    return(
        <nav>
            <div className = {classes.nav_avatar}></div>
           { (props.isAuth == true ) ?  <div className = {classes.nav_profile_name}>{props.name}</div> :
           <div className = {classes.nav_profile_name}><NavLink to = '/login' activeClassName={classes.active}>Sign in</NavLink></div> }
            <div className = {classes.nav_links}>
                <div  className={classes.item}><NavLink to = '/Profile' activeClassName={classes.active}>Profile</NavLink><span ></span></div>
                <div className={classes.item}><NavLink to = '/Messages' activeClassName={classes.active}>Messages</NavLink><span className = {classes.span_active}>{props.countMessages}</span></div>
               <div className={classes.item}><NavLink to = '/Users' activeClassName={classes.active}>Users</NavLink><span className = {classes.span_active}></span></div>
              <div className={classes.item}><a hreff= '#' >Music</a><span ></span></div>
            </div>
        </nav>
    );
}

export default Navigation;
