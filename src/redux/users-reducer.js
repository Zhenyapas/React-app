let img1='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY3MDUxMjkzMjI1OTIwMTcz/brad-pitt-attends-the-premiere-of-20th-century-foxs--square.jpg';
           
let initialState = {
    users: [
    {id:1,  followed:true, fullName: 'Brad Pitt', status:'Bussy', location: {city:'LA', country: 'USA'} , img:img1},
    {id:2, followed:true, fullName: 'Vladimir', status:'Bussy', location: {city:'Kiev', country: 'Ukraine'}, img:img1},
    {id:3, followed:true, fullName: 'Brad', status:'Bussy', location: {city:'Kiev', country: 'Ukraine'},img:img1 },
    ],

}
const usersReducer = (state = initialState, action) => {

    let stateCopy;

    switch(action.type) {

      /*   case followActionCreator :
            stateCopy = {
                ...state,
                users: state.users.map(user => {

                    if (user.id === action.userId) {
                        return {...user, followed:true }
                    }
                    
                    return user
                })

            }


         case unfollowActionCreator :
            stateCopy = {
                ...state,
                users: state.users.map(user => {
    
                    if (user.id === action.userId) {
                        return {...user, followed:false}
                    }
                        
                    return user
                })
    
            }
 */
        default:
             return state;
    }

}

/* export const followActionCreator  = () => ({type:'FOLLOW', userId:id});
export const unfollowActionCreator  = () => ({type:'UNFOLLOW', userId:id}); */

export default usersReducer;