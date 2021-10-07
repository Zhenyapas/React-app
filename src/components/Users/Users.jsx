import React from 'react';
import User from './user';
import './users.css';







function Users(props) {

    let usersList = props.users.map( (obj) => <User  u={obj}
    unfollow={props.unfollow} follow={props.follow}   />);
   
    let onCklickPage = (p) => {
        
       
        props.setCurrentPage(p);
      
            
    };


    let selectedPage = 'selectedPage';
    let totalPages = [];
    let pageCount = Math.round(props.totalUsersCount / props.pageSize) ;
    for(let i=1;i <= pageCount ; i++) {totalPages.push(i);}
    let pages = totalPages.map((p) => <li  onClick={() => onCklickPage(p) } className={props.currentPage === p ?  selectedPage : ''}>{p}</li> );
    let next = <li>+</li>;
    let lust =  <li>-</li>;
    return(
         
           
            <div className='Dialogs_container'>
                <section className='Section_Dialogs'>
                    <div className='Content_dialogs'>

                        <div id='userTitle'>Users</div>

                         


                        <div className='dialogs_wrapper'> 
                        
                            {usersList}

                        </div>

                        
                        <ul className={`ulPages`}>
                            {lust}
                            {pages}
                            {next}
                        </ul>

                        


                    
                    </div>
                </section>

              

            </div>

     )
     
     
     
    
}    




export default Users;