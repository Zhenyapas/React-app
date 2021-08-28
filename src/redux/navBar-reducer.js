let initialState = {
    navBar:{   
        myName : {
               'name' : 'Zhenya Pas',
               'countMessages' : '12'
           },
       },  
}
const dialogsReducer = (state = initialState, action) => {

    switch(action.type ){
        case 'ADD-MESSAGE':
            let obj = {
            'img': 'https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2743&q=80',
            'name': 'Me',
            'message' : state.textareaDialog,
          }
            if (state.textareaDialog !== '') state.messageData4.push(obj);
            state.textareaDialog='';
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT' :
            state.textareaDialog = action.newMessageText; 
            return state;
        default:
            return state;      
          
     }      
    
}
export default dialogsReducer ;