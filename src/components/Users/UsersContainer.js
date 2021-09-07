import { connect } from 'react-redux';
import Users from './Users';



let mapStateToProps = (state) => {
    return {

       users:state.usersPage.users,
       status:state.usersPage.users.status,
       id:state.usersPage.users.id,
       img:state.usersPage.users.img,
       fullName:state.usersPage.users.fullName,



    }
};

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;