// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import state, { addPost, RootStateType, subscribe, updateNewPostText } from "./Redux/state"

let rerenderEntireTree = (state:RootStateType)=> {
    ReactDOM.render(
        <BrowserRouter >
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
    
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );