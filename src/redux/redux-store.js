import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogsReducer from './message-reducer';
import navBarReducer from './navBar-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar:navBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));




export default store;