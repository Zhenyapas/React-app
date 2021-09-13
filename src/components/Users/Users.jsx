import React from 'react';
import User from './user';
import * as axios from 'axios'; 




function Users(props) {

    if(props.users.length === 0) {

         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
             
            
            props.setUsers(response.data.items);
             
        });
    }    

    let usersList = props.users.map( (obj) => <User  u={obj}
      followed={obj.followed} changeToFollow={props.changeToFollow} 
     changeToUnfollow={props.changeToUnfollow}   />);

    return(
        <section>
            <div className='Dialogs_container'>
                <section className='Section_Dialogs'>
                    <div className='Content_dialogs'>

                        <div>Users</div>

                        <div className='dialogs_wrapper'> 
                        
                            {usersList}

                           
                    
                        
                            
                        
                        </div>
                    
                    
                    </div>
                </section>

              

            </div>

        </section>
    )
 }    




export default Users;