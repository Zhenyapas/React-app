import React from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';
import {updateNewPostText,addPost} from  '../../../redux/profile-reducer'


let mapStateToProps = (state) => {
    return{
        
        textareaPosts:state.profilePage.textareaPosts


    }

}
export default  connect(mapStateToProps,{updateNewPostText,addPost})(Posts);
 
