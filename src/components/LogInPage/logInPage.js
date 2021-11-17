import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { LogIn } from '../../redux/auth-reducer';



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component={'input'} />
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={'input'} type={'password'}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={'input'} />
            Remember me!
        </div>
        <button type={'submit'}>Login</button>
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