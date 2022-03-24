import React from "react";
import classes from "./FormsControl.module.css";

export const FormCreator = (Elem) => (props) => {

    let formStyle = (props.meta.error) ?  'inputError' : 'inp';
    let isErr = false;
    if(props.meta.error && (Elem === 'textarea')) {isErr=true;}

    return (
        <>
        <div className={classes.loginForm}>
            <Elem className={classes[formStyle]} {...props.input} {...props} /> 
        </div>
        {((props.meta.error && <div className={classes.error}>{props.meta.error}</div>) || 
        (props.meta.warning && <div className={classes.error}>{props.meta.warning}</div>))}
        </>
    )
}

export const Input = FormCreator('input');
export const Textarea = FormCreator('textarea');