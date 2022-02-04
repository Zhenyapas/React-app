import userPhoto from '../../../assets/images/userFace.gif';
import React, {useState,useEffect} from 'react';
import classes from './PhotoWithHooks.module.css';
import { Field, reduxForm } from 'redux-form';

const PhotoWithHooks = (props) => {

    if (props.isMainUser) { 
         return ( 
             <MainUserPhoto {...props} />
         );
    }

    return (
        <UserPhoto {...props} />
    )
}

const  UserPhoto = (props) => {

    return (
        <>
           {(props.profile.photos.small !== null) ?  <div className='Content profileAvatar '><img src={props.profile.photos.large}></img> </div> 
            : 
                <div className='Content profileAvatar '><img src={userPhoto}></img> </div>
            }
        </>
    )

}

const  MainUserPhoto = (props) => {

    let [editMode,setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true);
    }

    const addPhoto = (e) => {
       alert("WSWSWWSWSWS!");
        if(e.target.files.length) {
            props.uploadPhoto(e.target.files[0]);
        }
    }

    return (
        <>
        <div className='Content profileAvatar'>
            {!editMode && <div onDoubleClick={activateEditMode} ><img  className= 'profileAvatar' src={props.profile.photos.large}></img></div>} 
        </div> 
            {editMode && <input className={classes.input} type={'file'} onChange={addPhoto} accept=".jpg, .jpeg, .png"/>}
        </>
    )

}


export default PhotoWithHooks;