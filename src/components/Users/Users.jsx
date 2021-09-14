import React from 'react';
import User from './user';
import * as axios from 'axios'; 





class Users extends React.Component {

    

    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            
           
            this.props.setUsers(response.data.items);
             
         });
         

    }
    
   
    
    

    render() {

        this.usersList = this.props.users.map( (obj) => <User  u={obj}
        followed={obj.followed} changeToFollow={this.props.changeToFollow} 
       changeToUnfollow={this.props.changeToUnfollow}   />);

     return(
         
        <section> 
           
            <div className='Dialogs_container'>
                <section className='Section_Dialogs'>
                    <div className='Content_dialogs'>

                        <div>Users</div>

                        <div className='dialogs_wrapper'> 
                        
                            {this.usersList}

                           
                    
                        
                            
                        
                        </div>
                    
                    
                    </div>
                </section>

              

            </div>

        </section>
     )
    }
}    




export default Users;