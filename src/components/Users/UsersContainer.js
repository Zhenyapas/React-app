import { connect } from 'react-redux';
import { setUsersPageActionCreator, followActionCreator, setUsersCreator, unfollowActionCreator, preloaderActionCreator } from '../../redux/users-reducer';
import UsersAPIComponent from './UsersAPIComponent';





let mapStateToProps = (state) => {
    return {

        users:state.usersPage.users,
        totalUsersCount:state.usersPage.totalUsersCount,
        pageSize:state.usersPage.pageSize,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
       
       



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
        },
        setUsersPage : (PageNumber) => {

            dispatch(setUsersPageActionCreator(PageNumber));
        },
        preloaderIsFetching : (isFetching) => {
            dispatch(preloaderActionCreator(isFetching));
        }

    }
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;