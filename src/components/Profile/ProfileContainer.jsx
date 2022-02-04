import React from 'react';
import { connect } from 'react-redux';
import { isMainUserAC,getUserProfile,getStatusProfile,updateStatusProfile,uploadPhoto} from '../../redux/profile-reducer';
import { setAuthUserData} from '../../redux/auth-reducer';
import Profile from './Profile.jsx';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



 class ProfileContainer extends  React.Component{

  
   

   componentDidMount(){
     
    

    
    let userId = this.props.match.params.userId;
    
    if (!userId) { 
      userId = this.props.meUserId ;
    }
    if (userId == this.props.meUserId) { 
      this.props.isMainUserAC(true);
    } else {
      this.props.isMainUserAC(false);
    }
    
    this.props.getUserProfile(userId);
    this.props.getStatusProfile(userId);
 

   

   }

   componentDidUpdate(prevProps) {
     
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
        
        this.props.getUserProfile(this.props.match.params.userId);
        this.props.getStatusProfile(this.props.match.params.userId);
        this.props.isMainUserAC(true);

    }
  }
  
  render(){
    return <Profile {...this.props} updateStatusProfile={this.props.updateStatusProfile} meUserId={this.props.meUserId} />
  }

 }
  
let mapStateToProps = (state) => {
  return {
  postInfo: state.profilePage.postInfo,
  profile: state.profilePage.profile,
  isMainUser: state.profilePage.isMainUser,
  meUserId:state.auth.id,
  status:state.profilePage.status,
 
  }

};
export default compose(connect(mapStateToProps, {isMainUserAC,setAuthUserData,getUserProfile,getStatusProfile,updateStatusProfile, uploadPhoto}),
                               withRouter,
                               withAuthRedirect)(ProfileContainer);
 