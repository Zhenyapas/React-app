import React from 'react';
import Users from './Users';
import loader from '../../assets/images/loader.svg';
import { connect } from 'react-redux';
import {unfollow,follow,requestUsers} from '../../redux/users-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getUsers, getTotalUsersCount,getPageSize,getCurrentPage,getIsFetching,getIsDisabled} from '../../redux/users-selectors';








class UsersContainer extends React.Component {

    

    componentDidMount() {

        this.props.requestUsers(this.props.currentPage,this.props.pageSize);

    }
    
     setCurrentPage = (pageNumber) => {

        this.props.requestUsers(pageNumber,this.props.pageSize);

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

        users:getUsers(state),
        totalUsersCount:getTotalUsersCount(state),
        pageSize:getPageSize(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        isDisabled:getIsDisabled(state),
       
       
    }
};

export default compose(
    connect(mapStateToProps,{requestUsers,unfollow,follow}),
    withRouter
    )(UsersContainer);






