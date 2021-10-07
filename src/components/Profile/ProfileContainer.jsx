import React from 'react';
import { connect } from 'react-redux';
import { isMainUserAC,getUserProfile} from '../../redux/profile-reducer';
import { setAuthUserData} from '../../redux/auth-reducer';
import Profile from './Profile.jsx';
import { withRouter } from 'react-router-dom';



 class ProfileContainer extends  React.Component{

  
   

   componentDidMount(){
     
    

    
    let userId = this.props.match.params.userId;
    
    
    
    if (!userId) { 
      userId = this.props.meUserId ;
      this.props.isMainUserAC(true);
    } else {
      this.props.isMainUserAC(false);
    }
    
    this.props.getUserProfile(userId);

   }


  
  render(){
    return <Profile {...this.props} />
  }

 }
  
let mapStateToProps = (state) => {
  return {
  postInfo: state.profilePage.postInfo,
  profile: state.profilePage.profile,
  isMainUser: state.profilePage.isMainUser,
  meUserId:state.auth.id,

  }
};
let withUrlDataContainerComponentwithRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps, {isMainUserAC,setAuthUserData,getUserProfile})(withUrlDataContainerComponentwithRouter);
 