import React from 'react';
import Dialog_long from './Dialogs_Type/Dialog_long';
import Dialog_short from './Dialogs_Type/Dialog_short.jsx';
import './Messages.css';








function Messages(props) {

    let Dialogs = props.state.getState().infoData.map( (obj) => <Dialog_short message={obj.message} name={obj.name} img={obj.img} id={obj.id}/>
    );
    let Dialog = props.state.getState().messageData4.map( (obj) => <Dialog_long message={obj.message} name={obj.name} img={obj.img} id={obj.id} />
    );
    let newMessageElement=React.createRef();
    let addPost = () =>{
      props.dispatch({type:'ADD-MESSAGE'})
    };
    let changeTextarea = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newMessageText: text});
    };

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
                        
                         <div>{props.state.getState().messageData4[0].name}</div>


                         <div className='dialogs_wrapper'> 
        
                            {Dialog}

                         </div>

                       
                    </div>
                    <div className='Section_addMessage'>
                      <div className='addMessage_wrapper'>
                          <textarea ref={newMessageElement} onChange={changeTextarea} value={props.state.getState().textareaDialog} className="addMessage_textarea" placeholder="write your message"></textarea>
                          <div className='addMessage_button' onClick={addPost}>send</div>
                      </div>
                    </div>
                </section>    

            </div>

        </section>
    
    );
}
export default Messages;