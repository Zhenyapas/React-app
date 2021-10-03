import React from 'react';
import { connect } from 'react-redux';
import { isMainUserAC, setUserProfile } from '../../redux/profile-reducer';
import { setAuthUserData} from '../../redux/auth-reducer';
import Profile from './Profile.jsx';
import * as axios from 'axios'; 
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
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
            
      this.props.setUserProfile(response.data);
       
   });
   }


  
  render(){
    return <Profile {...this.props}  />
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
export default connect(mapStateToProps, {setUserProfile,isMainUserAC, setAuthUserData})(withUrlDataContainerComponentwithRouter);
 