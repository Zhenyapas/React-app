import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { authLogIn, LogOut} from '../../redux/auth-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';



class NavigationContainer extends React.Component {

    componentDidMount () {

     /*    this.props.authLogIn(); */

    }



   

    render() {
        return <Navigation {...this.props}  />
    }

}


let mapStateToProps = (state) => {
    return{
       name: state.auth.login,
       countMessages:state.navBar.myName.countMessages,
       isAuth:state.auth.isAuth,
       meUserId:state.auth.id,
    };
};

export default compose(connect(mapStateToProps,{authLogIn,LogOut}),withRouter)(NavigationContainer);





