import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';




function Navigation(props) {
    return(
        <nav>
            <div className = {classes.nav_avatar}></div>
            <div className = {classes.nav_profile_name}>{props.state.navBar.myName.name}</div>
            <div className = {classes.nav_links}>
                <div  className={classes.item}><NavLink to = '/Profile' activeClassName={classes.active}>Profile</NavLink><span ></span></div>
                <div className={classes.item}><NavLink to = '/Messages' activeClassName={classes.active}>Messages</NavLink><span className = {classes.span_active}>{props.state.navBar.myName.countMessages}</span></div>
                <div className={classes.item}><a hreff= '#' >News</a><span className = {classes.span_active}></span></div>
                <div className={classes.item}><a hreff= '#' >Music</a><span ></span></div>
            </div>
        </nav>
    );
}

export default Navigation;
