import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { authLogIn } from '../../redux/auth-reducer';



class NavigationContainer extends React.Component {

    componentDidMount () {

        this.props.authLogIn();

    }

    render() {
        return <Navigation {...this.props}  />
    }

}


let mapStateToProps = (state) => {
    return{
       name: state.auth.login,
       countMessages:state.navBar.myName.countMessages,
       isAuth:state.auth.isAuth
    };
};

export default connect(mapStateToProps,{authLogIn})(NavigationContainer);


