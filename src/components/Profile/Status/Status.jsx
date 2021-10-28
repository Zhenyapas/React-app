import React from 'react';
import classes  from './status.module.css';




class Status extends React.Component {

state = {
    editMode : false,
}

activateEditMode = () => {
  this.setState({
      editMode : true 
  })
}
deactivateEditMode = () => {
    this.setState({
        editMode : false
    })
  }

render() {
    return <>
    { (!this.state.editMode) && <div className='Content'> <span onDoubleClick={(this.props.isMainUser) && this.activateEditMode} >{this.props.status}</span></div>}
    { (this.state.editMode) && <div className="Content"><input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} /></div>}
    </>

}

}
export default Status;