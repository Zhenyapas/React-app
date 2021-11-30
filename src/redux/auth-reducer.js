import { usersAPI, loginAPI } from "../api/api";




           
let initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:null,
    
}
const usersReducer = (state = initialState, action) => {

    let stateCopy;

    switch(action.type) {


         case 'SET_USER_DATA'   :
             stateCopy = {
                 ...state,
                 ...action.data,
             }
             return stateCopy;

         case 'PRELOADER_IS_FETCHING' :
             stateCopy = {
                 ...state,
                isFetching : action.isFetching
             }
             return stateCopy;  
             
        default:
             return state;
    }

}

export const setAuthUserData = (id, email, login, isAuth)  => ({type: 'SET_USER_DATA', data:{id, email, login, isAuth}});
export const preloaderIsFetching = (isFetching) => ({type:'PRELOADER_IS_FETCHING', isFetching});

export const authLogIn = () => {

    return (dispatch) => {

       return loginAPI.authLogIn()
        .then((response) => {

            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data.id,
                   response.data.data.email,
                   response.data.data.login,true));
            }

        });

    }
}
export const LogIn = (email,password,rememberMe) => {

    return (dispatch) => {

        loginAPI.logIn(email,password,rememberMe)
        .then((response) => {

            if (response.data.resultCode === 0) {
                dispatch(authLogIn());
            }

        });

    }
}
export const LogOut = () => {

    return (dispatch) => {

        loginAPI.logOut()
        .then((response) => {

            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,
                   null,
                   null,null));
                dispatch(authLogIn());  
            }

        });

    }
}



export default usersReducer;

