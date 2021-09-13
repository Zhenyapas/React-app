import { connect } from 'react-redux';
import { followActionCreator, setUsersCreator, unfollowActionCreator } from '../../redux/users-reducer';
import Users from './Users';



let mapStateToProps = (state) => {
    return {

       users:state.usersPage.users,
      
       
       



    }
};
let mapDispatchToProps = (dispatch) => {
    return {
    
        changeToFollow: (id) => {

           dispatch(followActionCreator(id));

        },
        changeToUnfollow: (id) => {

            dispatch(unfollowActionCreator(id));
 
         },
        setUsers : (users)  => {

            dispatch(setUsersCreator(users));
        }

    }
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;