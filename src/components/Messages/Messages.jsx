import React from 'react';
import Posts from '../Profile/Posts/Posts';

import Dialog_long from './Dialogs_Type/Dialog_long';
import Dialog_short from './Dialogs_Type/Dialog_short.jsx';
import './Messages.css';








function Messages(props) {

    let Dialogs = props.info.map( (obj) => <Dialog_short message={obj.message} name={obj.name} img={obj.img} id={obj.id}/>
    );
    let Dialog = props.message.map( (obj) => <Dialog_long message={obj.message} name={obj.name} img={obj.img} id={obj.id} />
    );

    return(
        <section>
            <div className='Dialogs_container'>
                <section className='Section_Dialogs'>
                    <div className='Content_dialogs'>

                        <div>Dialogs</div>

                        <div className='dialogs_wrapper'> 
                        
                            {Dialogs}
                            
                        
                        </div>
                    
                    
                    </div>
                </section>

                <section className='Section_Dialog'>
                    <div className='Content_dialog'>
                        
                         <div>{props.message[0].name}</div>


                         <div className='dialogs_wrapper'> 
        
                            {Dialog}

                         </div>

                       
                    </div>
                    <div className='Section_addMessage'>
                      <div className='addMessage_wrapper'>
                          <textarea className="addMessage_textarea" placeholder="write your message"></textarea>
                          <div className='addMessage_button'>sent</div>
                      </div>
                    </div>
                </section>    

            </div>

        </section>
    
    );
}
export default Messages;