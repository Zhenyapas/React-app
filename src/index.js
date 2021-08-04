import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state.js';

let infoData = [
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
  
  ];
  
let  messageData4 = [
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
  
      
  
   ];
let myName = {
  'name' : 'Zhenya Pas',
}
let postInfo = [
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
},
];
ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
