import React from 'react';
import User from './user';
import './users.css';







function Users(props) {

    let usersList = props.users.map( (obj) => <User  u={obj}
    changeToFollow={props.changeToFollow} 
    changeToUnfollow={props.changeToUnfollow}   />);
   
  
    let selectedPage = 'selectedPage';
    let totalPages = [];
    let pageCount = Math.round(props.totalUsersCount / props.pageSize) ;
    for(let i=1;i <= pageCount ; i++) {totalPages.push(i);}
    let pages = totalPages.map((p) => <li onClick={() => props.setCurrentPage(p) } className={props.currentPage === p ?  selectedPage : ''}>{p}</li> );

    return(
         
        <section> 
           
            <div className='Dialogs_container'>
                <section className='Section_Dialogs'>
                    <div className='Content_dialogs'>

                        <div>Users</div>

                         


                        <div className='dialogs_wrapper'> 
                        
                            {usersList}

                        </div>

                        
                        <ul className={`ulPages`}>{pages}</ul>


                    
                    </div>
                </section>

              

            </div>

        </section>
     )
     
     
     
    
}    




export default Users;