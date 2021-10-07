import { usersAPI } from "../api/api";




           
let initialState = {
    id:2,
    email:null,
    login:null,
    isAuth:false,
    
}
const usersReducer = (state = initialState, action) => {

    let stateCopy;

    switch(action.type) {


         case 'SET_USER_DATA'   :
             stateCopy = {
                 ...state,
                 ...action.data,
                 isAuth: true ,

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

export const setAuthUserData = (id, email, login)  => ({type: 'SET_USER_DATA', data:{id, email, login}});
export const preloaderIsFetching = (isFetching) => ({type:'PRELOADER_IS_FETCHING', isFetching});

export const authLogIn = () => {

    return (dispatch) => {

        usersAPI.authLogIn()
        .then((response) => {

            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data.id,
                   response.data.data.email,
                   response.data.data.login));
            }

        });

    }
}
authLogIn();

export default usersReducer;

