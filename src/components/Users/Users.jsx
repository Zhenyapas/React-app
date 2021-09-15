import React from 'react';
import User from './user';
import * as axios from 'axios'; 
import './users.css';





class Users extends React.Component {

    

    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            
           
            this.props.setUsers(response.data.items);
             
         });
         

    }
    
     setCurrentPage = (pageNumber) => {
        this.props.setUsersPage(pageNumber);
    }
    
    

    render() {

        let usersList = this.props.users.map( (obj) => <User  u={obj}
         changeToFollow={this.props.changeToFollow} 
         changeToUnfollow={this.props.changeToUnfollow}   />);
        
       
        let selectedPage = 'selectedPage';
        let totalPages = [];
        let pageCount = Math.round(this.props.totalUsersCount / this.props.pageSize) ;
        for(let i=1;i <= pageCount ; i++) {totalPages.push(i);}
        let pages = totalPages.map((p) => <li onClick={() => this.setCurrentPage(p) } className={this.props.currentPage === p ?  selectedPage : ''}>{p}</li> );


     return(
         
        <section> 
           
            <div className='Dialogs_container'>
                <section className='Section_Dialogs'>
                    <div className='Content_dialogs'>

                        <div>Users</div>

                        
                        <ul className={`ulPages`}>{pages}</ul>

                        <div className='dialogs_wrapper'> 
                        
                            {usersList}

                           
                    
                        
                            
                        
                        </div>
                    
                    
                    </div>
                </section>

              

            </div>

        </section>
     )
    }
}    




export default Users;