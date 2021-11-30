import { authLogIn } from "./auth-reducer";


       
let initialState = {

    initialized: false
    
}
const appReducer = (state = initialState, action) => {

    let stateCopy;

    switch(action.type) {


        case 'INITIALIZED_SUCCESS'   :
             stateCopy = {
                 ...state,
                 initialized:true
             }
             return stateCopy;

        default:
             return state;
    }

}

export const initializedSuccess = ()  => ({type: 'INITIALIZED_SUCCESS'});


export const initializeApp = () => {

    return (dispatch) => {

       let promise = dispatch(authLogIn());

       Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
       });

        

    }
}

export default appReducer;

