import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let posts = [
    { id: 1, message: 'Hello! How are you?!', counts: 10 },
    { id: 2, message: 'This is my first post!', counts: 15 }
]

let dialogues = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Vika' },
    { id: 3, name: 'Misha' },
    { id: 4, name: 'Sasha' }
]

let messages = [
    { id: 1, message: 'Hello!' },
    { id: 2, message: 'Give me Money!!!' },
    { id: 3, message: 'I Love You' },
]

ReactDOM.render(<App
    posts={posts}
    dialogues={dialogues}
    messages={messages} />, document.getElementById('root'));


// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );