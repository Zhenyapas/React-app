import React from 'react';
import Dialog_short from '../Messages/Dialogs_Type/Dialog_short';
import User from './user';















function Users(props) {

    let usersList = props.users.map( (obj) => <User message={obj.status} name={obj.fullName} img={obj.img} id={obj.id} followed={obj.followed} changeFollowedState={obj.changeFollowedState} />);

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