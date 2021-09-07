import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';







let mapStateToProps = (state) => {
    return{
       name: state.navBar.myName.name,
       countMessages:state.navBar.myName.countMessages
    };
};

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;
