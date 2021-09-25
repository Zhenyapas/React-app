let img1='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY3MDUxMjkzMjI1OTIwMTcz/brad-pitt-attends-the-premiere-of-20th-century-foxs--square.jpg';
           
let initialState = {
    userId:null,
    email:null,
    login:'Zheka',
    
}
const usersReducer = (state = initialState, action) => {

    let stateCopy;

    switch(action.type) {


         case 'SET_USER_DATA'   :
             stateCopy = {
                 ...state, ...action.data
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
export const preloaderIsFetching = (isFetching) => ({type:'PRELOADER_IS_FETCHING', isFetching})

export default usersReducer;

