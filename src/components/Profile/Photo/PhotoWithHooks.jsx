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
           {(props.profile.photos.small ) ?  <div className='Content profileAvatar '><img src={props.profile.photos.large}></img> </div> 
            : 
                <div className='Content profileAvatar '><img src={userPhoto}></img> </div>
            }
        </>
    )

}

const  MainUserPhoto = (props) => {

    let [editMode,setEditMode] = useState(false);
    let [userPhoto, setUserPhoto] = useState(props.profile.photos.large);
    const activateEditMode = () => {
        setEditMode(true);
        setUserPhoto(props.profile.photos.large);
    }

    useEffect(() => {
        setUserPhoto(props.profile.photos.large);
    }, [props.profile.photos.large]);
   
    const addPhoto = (e) => {
   
        if(e.target.files.length) {
            props.uploadPhoto(e.target.files[0]);
            setEditMode(false);
        }
    }

    return (
        <>
        <div className='Content profileAvatar'>
            {!editMode && <div onDoubleClick={activateEditMode} ><img  className= 'profileAvatar' src={userPhoto}></img></div>} 
            {editMode && <div><img  className= 'profileAvatar' src={userPhoto}></img></div>} 
        </div> 
           { editMode && <div className={classes.downloadPhoto}>
                {editMode && <input className={classes.input} type={'file'} onChange={addPhoto} accept=".jpg, .jpeg, .png"/>}
                {editMode && <div onClick={() => setEditMode(false)} className={classes.buttonClose}>close</div>}
            </div>}
        </>
    )

}


export default PhotoWithHooks;