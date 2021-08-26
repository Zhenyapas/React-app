
let store = {

  
    _callSubscriber() {

    },
    addPost1(newtext) {
       
        let obj = {
            'likes': '0',
            'post' : newtext
          }
          this._state.postInfo.push(obj);
          this._callSubscriber();

    },
    changeTextareaDialog(text) {
        this._state.textareaDialog = text;
        this._callSubscriber();
    },
    changeTextareaPosts(text) {
        
        this._state.textareaPosts = text;
        this._callSubscriber();

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action){ 
        if (action.type === 'ADD-POST'){
            let obj = {
                'likes': '0',
                'post' : this._state.textareaPosts
              }
              this._state.postInfo.push(obj);
              this._state.textareaPosts='';
              this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.textareaPosts = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE'){
            let obj = {
                'img': 'https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2743&q=80',
                'name': 'Me',
                'message' : this._state.textareaDialog,
              }
              if (this._state.textareaDialog !== '') this._state.messageData4.push(obj);
              this._state.textareaDialog='';
              this._callSubscriber(this._state);
         }      
         else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.textareaDialog = action.newMessageText;
            this._callSubscriber(this._state);
        }

    }, 

   

   
   _state : {
        infoData :[
            {
                'id': '1',
                'message':'Hey, how are you?',
                'name':'Borris Clinton',
                'img':'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80)'
            
            },
            {
                'id': '2',
                'message':'Just turn on my track when she come.',
                'name':'Barry White',
                'img':'https://im0-tub-ru.yandex.net/i?id=dc5b732973eae922ae0e29ff26542185&n=3&w=200&h=200&q=100'
            
            },
            {
                'id': '3',
                'message':'It is up to you?',
                'name':'Jesica Alba',
                'img':'https://image.winudf.com/v2/image/Y29tLmJta3NzZXJ2aWNlcy5qZXNzaWNhYWxiYXdhbGxwYXBlcnNoZF9zY3JlZW5fMTJfMTUzNjc3MDk1OF8wOTQ/screen-12.jpg?fakeurl=1&type=.jpg',
            
            },
            {
                'id': '4',
                'message':'Will you go to the beach?',
                'name':'Bradd Pitt',
                'img':'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY3MDUxMjkzMjI1OTIwMTcz/brad-pitt-attends-the-premiere-of-20th-century-foxs--square.jpg'
            
            },
            
        ],
        messageData4 : [
                {
                    'id': '4',
                    'message':'Hey',
                    'name':'Bradd Pitt',
                    'img':'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY3MDUxMjkzMjI1OTIwMTcz/brad-pitt-attends-the-premiere-of-20th-century-foxs--square.jpg',
                },
            
                {
                
                    'message':'Will you go to the beach?',
                    'name':'Bradd Pitt',
                    'img':'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY3MDUxMjkzMjI1OTIwMTcz/brad-pitt-attends-the-premiere-of-20th-century-foxs--square.jpg',
                },
            ],
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
       
     }
};

export default store;
