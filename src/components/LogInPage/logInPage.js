import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../forms-control/FormsControl';
import { LogIn } from '../../redux/auth-reducer';
import classes from '../../forms-control/FormsControl.module.css';
import { email, maxLength } from '../../forms-validators/FormsValidators';


const maxLength15 = maxLength(35);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login or E-mail'} name={'login'} component={Input} validate={[ maxLength15, email]} />
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={Input} type={'password'}/>
        </div>
        {(props.error) ? <div className={classes.error}>{props.error}</div> : null}
        <button className={classes.btn} disabled={props.pristine || props.submitting} type={'submit'}>Login</button>
        
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm);

const Login = (props) => {

    let onSubmit = (formData) => {
       props.LogIn(formData.login,formData.password,formData.rememberMe);
    }
   
    if(props.isAuth) return (<Redirect to='/Profile' /> );

    return(
    <section>
    <div className='Content'>Login</div>
    <LoginReduxForm onSubmit={onSubmit} />
    </section>    
    );
}

const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})

export  default connect(mapStateToProps,{LogIn})(Login);