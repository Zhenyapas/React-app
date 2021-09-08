import { connect } from 'react-redux';
import { followActionCreator } from '../../redux/users-reducer';
import Users from './Users';



let mapStateToProps = (state) => {
    return {

       users:state.usersPage.users,
       status:state.usersPage.users.status,
       id:state.usersPage.users.id,
       img:state.usersPage.users.img,
       fullName:state.usersPage.users.fullName,
       followed:state.usersPage.users.followed



    }
};
let mapDispatchToProps = (dispatch) => {
    return {
    
        changeFollowedState: (id) => {

           dispatch(followActionCreator(id));

        }
    }
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;