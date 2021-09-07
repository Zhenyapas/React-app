import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile.jsx';

  
  
let mapStateToProps = (state) => {
  return {

  postInfo: state.profilePage.postInfo,
  name: state.profilePage.myName.name


  }
};
const ProfileContainer = connect(mapStateToProps)(Profile);
export default ProfileContainer;