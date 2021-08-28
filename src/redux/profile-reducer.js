let initialState = {
    profilePage : {    
        myName : {
               'name' : 'Zhenya Pas',
               'countMessages' : '12'
           },       
        postInfo : [
               {'likes': '8',
               'post' : 'It is not simple as I gess!'
               },
               {'likes': '15',
               'post' : 'Just work!'
               },
               {'likes': '15',
               'post' : 'I\'ve done it!'
               },
               {'likes': '15',
               'post' : 'You got it!'
               }
           ],
     
        textareaPosts: '',
       },
}
const profileReducer = (state = initialState, action) => {

    switch(action.type){
      case 'ADD-POST' :
          let obj = {
            'likes': '0',
            'post' : state.textareaPosts
          }
          state.postInfo.push(obj);
          state.textareaPosts='';
         return state;
      case 'UPDATE-NEW-POST-TEXT':
          state.textareaPosts = action.newText;
          return state;
       default:
          return state;   
    } 
    

}
export default profileReducer ;