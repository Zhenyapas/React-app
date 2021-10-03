let img1='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY3MDUxMjkzMjI1OTIwMTcz/brad-pitt-attends-the-premiere-of-20th-century-foxs--square.jpg';
           
let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: null,
    currentPage: 1,
    isFetching:false,
    
    

}
const usersReducer = (state = initialState, action) => {

    let stateCopy;

    switch(action.type) {

         case 'FOLLOW' :
            stateCopy = {
                ...state,
                users: state.users.map(user => {

                    if (user.id === action.userId) {
                        return {...user, followed:true }
                    }
                    
                    return user
                })

            }

            return stateCopy;


         case 'UNFOLLOW' :
            stateCopy = {
                ...state,
                users: state.users.map(user => {
    
                    if (user.id === action.userId) {
                        return {...user, followed:false}
                    }
                        
                    return user
                })
    
            }
            return stateCopy;

         case 'SET_USERS'   :
             stateCopy = {
                 ...state, users: [...action.users ]
             }
             return stateCopy;

             
         case 'CLICK_TO_PAGE' :
            stateCopy = {
               ...state,
               currentPage: action.pageNumber
    
            }
            return stateCopy;
         case 'PRELOADER_IS_FETCHING' :
             stateCopy = {
                 ...state,
                isFetching : action.isFetching
             }
             return stateCopy;  
         case 'SET_TOTAL_USERS_COUNT' :
           
             stateCopy = {
                 ...state,
                 totalUsersCount: (action.totalCount < 50) ? action.totalCount : 42
                }
                return stateCopy;   
        case 'IS_BUTTON_DISABLED' :
           
             stateCopy = {
                 ...state,
                 isDisabled: action.isFetch 
                }
                return stateCopy;           
             
        default:
             return state;
    }

}

export const changeToFollow  = (id) => ({type:'FOLLOW', userId:id});
export const changeToUnfollow  = (id) => ({type:'UNFOLLOW', userId:id});
export const setUsersPage = (pageNumber) => ({type:'CLICK_TO_PAGE', pageNumber});
export const setUsers = (users) => ({type: 'SET_USERS', users});
export const setTotalUsersCount = (totalCount) => ({type:'SET_TOTAL_USERS_COUNT', totalCount});
export const preloaderIsFetching = (isFetching) => ({type:'PRELOADER_IS_FETCHING', isFetching});
export const isButtonDisabled = (isFetch) => ({type:'IS_BUTTON_DISABLED', isFetch});

export default usersReducer;

