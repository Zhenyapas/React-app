import {usersAPI} from '../api/api';          
let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: null,
    currentPage: 1,
    isFetching:false,
    searchingValue: '',
    
    

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
                 totalUsersCount:  action.totalCount 
                }
                return stateCopy;   
        case 'IS_BUTTON_DISABLED' :
           
             stateCopy = {
                 ...state,
                 isDisabled: action.isFetch 
                }
                return stateCopy;           
        case 'UPDATE-SEARCH-TEXT' :

             stateCopy  = {
                 ...state,
                 searchingValue: action.text
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
export const updateSearchText = (text) => ({type:'UPDATE-SEARCH-TEXT',text});

export const requestUsers = (currentPage,pageSize) => {
    
  return (dispatch) => {

            dispatch(preloaderIsFetching(true));
            usersAPI.getUsers(currentPage,pageSize)
            .then(data => {
                
                dispatch(preloaderIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersPage(currentPage)); 
                dispatch(setTotalUsersCount(data.totalCount));
            });

    }   
}
export const searchingUserByName = (text) => {
    
    return (dispatch) => {
            dispatch(preloaderIsFetching(true));
            usersAPI.getUserByName(text)
            .then(data => {
                dispatch(preloaderIsFetching(false));
                dispatch(setUsers(data.items));
            })
    }
}
export const unfollow = (e, id) => {
    
    return (dispatch) => {
  
        usersAPI.unfollowUser(id)
        .then(data => {
           
            if (data.resultCode === 0) {
             dispatch(changeToUnfollow(id));
              
            }
            e.target.disabled=false;
           });
  
      }   
  }
  export const follow = (e, id) => {
    
    return (dispatch) => {
  
        usersAPI.followUser(id)
        .then(data => {
           
            if (data.resultCode === 0) {
             dispatch(changeToFollow(id));
              
            }
            e.target.disabled=false;
           });
  
      }   
  } ; 

  export default usersReducer;