import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import * as axios from 'axios'; 
import { setAuthUserData } from '../../redux/auth-reducer';



class NavigationContainer extends React.Component {

    componentDidMount () {

        axios.get (`https://social-network.samuraijs.com/api/1.0/auth/me`, {
             withCredentials:true
             })
             .then(response => {
                
                 if (response.data.resultCode === 0) {
                     this.props.setAuthUserData(response.data.data.id,
                        response.data.data.email,
                        response.data.data.login)
                 }
                });

    }

    render() {
        return <Navigation {...this.props}  />
    }

}


let mapStateToProps = (state) => {
    return{
       name: state.auth.login,
       countMessages:state.navBar.myName.countMessages
    };
};

export default connect(mapStateToProps,{setAuthUserData})(NavigationContainer);


