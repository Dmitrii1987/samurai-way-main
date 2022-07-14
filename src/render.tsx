import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import state, { addPost, RootStateType, updateNewPostText } from "./Redux/state"


export let rerenderEntireTree = (state:RootStateType)=> {
    ReactDOM.render(
        <BrowserRouter >
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
    
}