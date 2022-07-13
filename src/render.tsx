import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import state, { addPost } from "./Redux/state"


export let rerenderEntireTree = (props:any)=> {
    ReactDOM.render(
        <BrowserRouter >
            <App state={state} addPost={addPost} />
        </BrowserRouter>, document.getElementById('root'));
    
}