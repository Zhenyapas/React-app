import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MessagesContainer from './components/Messages/MessagesContainer';
import Navigation from './components/Navigation/Navigation.jsx';

import Profile from './components/Profile/Profile.jsx';





function App(props) {
  return (
    
    
     <div>
      <Navigation state={props.state}  />

        <div className="wrapper">
          <div class='nav-section'></div>
          <Route path='/Profile' render={ () => <Profile  state={props.state} dispatch={props.dispatch}  />} />
          <Route path='/Messages'render={ () => <MessagesContainer state={props.state} dispatch={props.dispatch} />} />
        </div>

    </div>
   
  );
}

export default App;
