import React, { useState } from 'react';
import User from './user';
import './users.css';







function Users(props) {

    let usersList = props.users.map( (obj) => <User  u={obj}
    unfollow={props.unfollow} follow={props.follow}   />);


    

    let [arrPages,setArrPages]=useState([1,2,3,4,'...',150]);

   
    let onCklickPage = (p) => {
        
       
        props.setCurrentPage(p);

        let arr=[];
        for(let i=0;i<4;i++){
           
            arr.push(p-2+i);
        }

        if(p>3){
           let  arrPages = [1,'...',...arr,'...',150];
           setArrPages(arrPages);
        } else {
            setArrPages([1,2,3,4,'...',150]);
        }
      
            
    };


    let selectedPage = 'selectedPage';
    let totalPages = [];
    let pageCount = Math.round(props.totalUsersCount / props.pageSize) ;
    for(let i=1;i <= pageCount ; i++) {totalPages.push(i);}



    let pages = totalPages.map((p) => <li  onClick={() => onCklickPage(p) } className={props.currentPage === p ?  selectedPage : ''}>{p}</li> );
    let pages2 = arrPages.map((p) => (p !== '...') ? <li  onClick={() => onCklickPage(p) } className={props.currentPage === p ?  selectedPage : ''}>{p}</li> : <li>{p}</li>)
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
                           {/*  {lust} */}
                            {pages2}
                           {/*  {next} */}
                        </ul>

                        


                    
                    </div>
                </section>

              

            </div>

     )
     
     
     
    
}    




export default Users;