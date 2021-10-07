import React from 'react';
import Users from './Users';
import loader from '../../assets/images/loader.svg';
import { connect } from 'react-redux';
import {unfollow,follow,getUsers} from '../../redux/users-reducer';
import { Redirect } from 'react-router-dom';








class UsersContainer extends React.Component {

    

    componentDidMount() {

        this.props.getUsers(this.props.currentPage,this.props.pageSize);

    }
    
     setCurrentPage = (pageNumber) => {

        this.props.getUsers(pageNumber,this.props.pageSize);

    }
    
      
    

    render() {

     if(!this.isAuth) return  <Redirect to='/login' />
     return( <>
        
        {this.props.isFetching ? <img className='loader' src={loader}></img> : null}

        <section> 
        <Users {...this.props} setCurrentPage={this.setCurrentPage}
             />
        </section>     
       </>

     )
    }
}

let mapStateToProps = (state) => {
    return {

        users:state.usersPage.users,
        totalUsersCount:state.usersPage.totalUsersCount,
        pageSize:state.usersPage.pageSize,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        isDisabled:state.usersPage.isDisabled,
        isAuth:state.auth.isAuth
       
    }
};

export default connect(mapStateToProps,{ getUsers,unfollow,follow})(UsersContainer);






