import {combineReducers, createStore} from 'redux';
import dialogsReducer from './message-reducer';
import profileReducer from './profile-reducer';
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});
let store = createStore(reducers);




export default store;