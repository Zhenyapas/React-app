import React from "react";
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { compose } from "redux";



let mapStateToPropsForRedirect = (state) => ({
    
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized
});

export const withAuthRedirect = (Component) => {

    class RedirectComponents extends React.Component {


        render() {

        
        
        if(!this.props.isAuth)  return <Redirect to='/login' /> ;

        return <Component {...this.props} />
        }
    }

   return compose(connect(mapStateToPropsForRedirect))(RedirectComponents);
   
    

}