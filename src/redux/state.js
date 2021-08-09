import {rerenderEntireTree} from '../Render';
let state = {

   func : {

    addPost1 : (text) => {
       
        let obj = {
            'likes': '0',
            'post' : text
          }
          state.postInfo.push(obj);
          rerenderEntireTree(state);

    },
    changeTextareaPosts: (text) => {
        
        state.textareaPosts = text;
        rerenderEntireTree(state);

    },

   },

   

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
    textareaPosts: ''   ,  
};

export default state;
