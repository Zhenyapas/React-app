import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { authLogIn, LogOut,getMainUserData} from '../../redux/auth-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';



class NavigationContainer extends React.Component {

    componentDidMount () {

     /*    this.props.authLogIn(); */
     this.props.getMainUserData( this.props.meUserId);
    
     

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
       profile: state.profilePage.profile,
       photo: state.auth.photos
    };
};

export default compose(connect(mapStateToProps,{authLogIn,LogOut,getMainUserData}),withRouter)(NavigationContainer);





