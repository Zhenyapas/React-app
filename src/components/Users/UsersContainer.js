import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator } from '../../redux/users-reducer';
import Users from './Users';



let mapStateToProps = (state) => {
    return {

       users:state.usersPage.users,
       status:state.usersPage.users.status,
       id:state.usersPage.users.id,
       img:state.usersPage.users.img,
       fullName:state.usersPage.users.fullName,
       followed:state.usersPage.users.followed,
       location:state.usersPage.users.location,
       



    }
};
let mapDispatchToProps = (dispatch) => {
    return {
    
        changeToFollow: (id) => {

           dispatch(followActionCreator(id));

        },
        changeToUnfollow: (id) => {

            dispatch(unfollowActionCreator(id));
 
         }
    }
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;