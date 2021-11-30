import React, {useState,useEffect} from 'react';

import classes  from './status.module.css';




const StatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
       props.updateStatusProfile(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return <>
    {!editMode && <div className='Content'> <span onDoubleClick={(props.isMainUser) && activateEditMode } >{props.status || '***' }</span></div>}
    { editMode && <div className="Content"><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} /></div>}
    </>

}

   
export default StatusWithHooks; 