import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Messages from './components/Messages/Messages.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

import Profile from './components/Profile/Profile.jsx';





function App(props) {
  return (
    
    
     <div>
      <Navigation state={props.state}  />

        <div className="wrapper">
          <div class='nav-section'></div>
          <Route path='/Profile' render={ () => <Profile  state={props.state}  />} />
          <Route path='/Messages'render={ () => <Messages info={props.state.infoData} message={props.state.messageData4} />} />
        </div>

    </div>
   
  );
}

export default App;
