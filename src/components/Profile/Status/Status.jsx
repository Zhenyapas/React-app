import React from 'react';
import classes  from './status.module.css';




class Status extends React.Component {



state = {
  editMode : false,
  status: this.props.status
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
  this.props.updateStatusProfile(this.state.status);
  
  }
onStatusChange = (e) => {
  this.setState({
      status : e.currentTarget.value
  })
}
componentDidUpdate(prevProps,prevState){
  if(prevProps.status !== this.props.status){
    this.setState({
      status: this.props.status
    })
  }
}

render() {
    return <>
    { (!this.state.editMode) && <div className='Content'> <span onDoubleClick={(this.props.isMainUser) && this.activateEditMode } >{ this.props.status || ' ***' }</span></div>}
    { (this.state.editMode) && <div className="Content"><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} /></div>}
    </>

}

}
export default Status;