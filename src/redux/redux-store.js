import {combineReducers, createStore} from 'redux';
import dialogsReducer from './message-reducer';
import navBarReducer from './navBar-reducer';
import profileReducer from './profile-reducer';
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar:navBarReducer,
});
let store = createStore(reducers);




export default store;