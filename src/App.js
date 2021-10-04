import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MessagesContainer from './components/Messages/MessagesContainer';
import NavigationContainer from './components/Navigation/NavigationContainer';

import ProfileContainer from './components/Profile/ProfileContainer'

import UsersContainer from './components/Users/UsersContainer';





function App() {
  return (
    
    
     <div>
      <NavigationContainer  />

        <div className="wrapper">
          <div class='nav-section'></div>
          <Route path='/Profile/:userId?' render={ () => <ProfileContainer  />} />
          <Route path='/Messages' render={ () => <MessagesContainer  />} />
          <Route path='/Users' render={ () => <UsersContainer  />} />
        </div>

    </div>
   
  );
}

export default App;
