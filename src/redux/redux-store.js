import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogsReducer from './message-reducer';
import navBarReducer from './navBar-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar:navBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form:formReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));




export default store;