let initialState = {
       
        myName : {
               'name' : 'Zhenya Pas',
               'countMessages' : '12'
           },       
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
          ...state
        }
          stateCopy.textareaPosts = action.newText;
          return stateCopy;
       default:
          return state;   
    } 
    

}
export default profileReducer ;