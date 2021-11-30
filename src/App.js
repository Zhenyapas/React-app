import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Login from './components/LogInPage/logInPage';
import MessagesContainer from './components/Messages/MessagesContainer';
import NavigationContainer from './components/Navigation/NavigationContainer';
import loader from './assets/images/loader.svg'
import ProfileContainer from './components/Profile/ProfileContainer'

import UsersContainer from './components/Users/UsersContainer';
import {initializeApp} from './redux/app-reducer';





class App extends React.Component {

componentDidMount = () => {

  this.props.initializeApp();

}

render() {
  if(!this.props.initialized) return <img className='loader' src={loader}></img> ;
  return (
    
    
     <div>
      <NavigationContainer  />

        <div className="wrapper">
          <div class='nav-section'></div>
          <Route path='/Profile/:userId?' render={ () => <ProfileContainer  />} />
          <Route path='/Messages' render={ () => <MessagesContainer  />} />
          <Route path='/Users' render={ () => <UsersContainer  />} />
          <Route path='/login' render={ () => <Login />} />
        </div>

    </div>
   
  );
}


}
const mapStateToProps = (state) => {
 return {
   initialized: state.app.initialized
 }
}


export default compose(withRouter, connect(mapStateToProps,{initializeApp}))(App);
