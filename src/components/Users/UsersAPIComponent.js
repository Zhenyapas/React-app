import React from 'react';
import * as axios from 'axios'; 
import Users from './Users';
import loader from '../../assets/images/loader.svg';






class UsersAPIComponent extends React.Component {

    

    componentDidMount() {

        this.props.preloaderIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            
            this.props.preloaderIsFetching(false);
            this.props.setUsers(response.data.items);
             
         });
        
        

    }
    
     setCurrentPage = (pageNumber) => {
        this.props.setUsersPage(pageNumber);
        this.props.preloaderIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            
            this.props.preloaderIsFetching(false);
            this.props.setUsers(response.data.items);
             
         });
    }
    
      
    

    render() {

       
     return( <>
        
        {this.props.isFetching ? <img className='loader' src={loader}></img> : null}

        <section> 
        <Users users={this.props.users}
            changeToFollow={this.props.changeToFollow} 
            changeToUnfollow={this.props.changeToUnfollow}
            totalUsersCount={this.props.totalUsersCount }
            pageSize= {this.props.pageSize}
            currentPage={this.props.currentPage}
            setCurrentPage={this.setCurrentPage}
             />
        </section>     
       </>

     )
    }
}    




export default UsersAPIComponent;