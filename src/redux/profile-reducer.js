import {usersAPI,profileAPI} from '../api/api'; 

let initialState = {

        postInfo : [
          {'likes': '8',
          'post' : 'It is not simple as I gess!'
          },
          {'likes': '1',
          'post' : 'Just work!'
          },
          {'likes': '3',
          'post' : 'I\'ve done it!'
          },
          {'likes': '8',
          'post' : 'You got it!'
          }

           ],
     
        textareaPosts: '',

        profile:[],

        status:'',

        isMainUser: true,
       
}
const profileReducer = (state = initialState, action) => {
  let stateCopy;

    switch(action.type){
      case 'ADD-POST' :
        stateCopy = {
          ...state,
          postInfo: [...state.postInfo]
        }
          let obj = {
            'likes': '0',
            'post' : stateCopy.textareaPosts
          }
          if (stateCopy.textareaPosts !== '') stateCopy.postInfo.push(obj);
          stateCopy.textareaPosts='';
         return stateCopy;
      case 'UPDATE-NEW-POST-TEXT':
        stateCopy = {
          ...state,
          textareaPosts: action.text
        }
          return stateCopy;
      case 'SET_PROFILE_USER':
        stateCopy = {
            ...state, profile:action.profile,
        }
        return stateCopy;
      case 'IS_MAIN_USER' :
         stateCopy = {
             ...state,
            isMainUser : action.isItMain
          }
          return stateCopy;
      case 'SET_STATUS_PROFILE' :
          stateCopy = {
              ...state,
             status : action.status
          }
          return stateCopy;
                          
       default:
          return state;   
    } 
    

}
export default profileReducer ;



export const updateNewPostText = (text) => ({type:'UPDATE-NEW-POST-TEXT',text});
export const addPost = () => ({type:'ADD-POST'});
export const setUserProfile = (profile) => ({type:'SET_PROFILE_USER',profile});
export const isMainUserAC = (isItMain) =>({type:'IS_MAIN_USER',isItMain});
export const setStatusProfile = (status) => ({type:'SET_STATUS_PROFILE',status});

export const getUserProfile = (id) => {
    
  return (dispatch) => {

            usersAPI.getUserProfile(id)
            .then(response => {
                
                
                dispatch(setUserProfile(response.data));
                
            });

    }   
}

export const getStatusProfile = (id) => {
    
  return (dispatch) => {

            profileAPI.getStatusProfile(id)
            .then(response => {
                
                
                dispatch(setStatusProfile(response.data));
                
            });

    }   
}

export const updateStatusProfile = (status) => {
    
  return (dispatch) => {

            profileAPI.updateStatusProfile(status)
            .then(response => {
                
              if(response.data.resultCode === 0){

                dispatch(setStatusProfile(status));

              }
            });

    }   
}

