import {combineReducers, createStore} from 'redux';
import dialogsReducer from './message-reducer';
import navBarReducer from './navBar-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar:navBarReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);




export default store;