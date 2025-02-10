import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea,Input } from '../../../forms-control/FormsControl';
import { maxLength } from '../../../forms-validators/FormsValidators.jsx';
import './Posts.css';


let flag = false;
const textSize = (size) => (text,previous) =>  text.length>size ? previous : text;
const text20 = textSize(20);





const textLength20 = maxLength(20);

const TextareaForm = (props) => {

   
   
    return (
        <>
        <form onSubmit={props.handleSubmit}>
            
                <Field className='textarea_1' name='post' component={Textarea}  validate={[textLength20]} placeholder='What is on your mind' />
            


            <div className='button_section'>
                <button className='button_to_click Post' disabled={props.pristine} type='submit'>Add Post</button>
            </div>
        </form>
        </>
    )

}

const TextareaReduxForm = reduxForm({form:'post'})(TextareaForm);

function Posts(props) {
    console.log('RENDER!')
    let newPostElement=React.createRef();
    let addPost = (data) => {
        
        props.updateNewPostText(data.post);
        props.addPost();
        props.resetInput();
        
    }

    return (
        <>
            <TextareaReduxForm onSubmit={addPost} />
        </>
    );
}



export default Posts;