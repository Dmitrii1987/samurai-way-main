// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import store,{ RootStateType} from "./Redux/store"

let rerenderEntireTree = (state:RootStateType)=> {
    ReactDOM.render(
        <BrowserRouter >
            <App state={state} 
            dispatch={store.dispatch.bind(store)} 
            store={store}
            // updateNewPostText={store.updateNewPostText.bind(store)} 
            />
        </BrowserRouter>, document.getElementById('root'));
    
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );