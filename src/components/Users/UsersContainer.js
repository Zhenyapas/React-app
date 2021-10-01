import React from 'react';
import * as axios from 'axios'; 
import Users from './Users';
import loader from '../../assets/images/loader.svg';
import { connect } from 'react-redux';
import { changeToFollow,changeToUnfollow,setUsers,setUsersPage,preloaderIsFetching,setTotalUsersCount } from '../../redux/users-reducer';
import { usersAPI } from '../../api/api';







class UsersContainer extends React.Component {

    

    componentDidMount() {

        this.props.preloaderIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
            
            this.props.preloaderIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
             
         });
        
        

    }
    
     setCurrentPage = (pageNumber) => {
        this.props.setUsersPage(pageNumber);
        this.props.preloaderIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
        .then(data => {
            
            this.props.preloaderIsFetching(false);
            this.props.setUsers(data.items);
           
             
         });
    }
    
      
    

    render() {

       
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
       
    }
};

export default connect(mapStateToProps,{ changeToFollow,changeToUnfollow,setUsers,setUsersPage,setTotalUsersCount,preloaderIsFetching,})(UsersContainer);






