const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'Hello! How are you?!', counts: 10 },
        { id: 2, message: 'This is my first post!', counts: 15 },
        { id: 3, message: 'This is my second post!', counts: 2 },
    ],
    newPostText: ''
}

const profileReducer = (state=initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                counts: 0
            }
            if(state.newPostText !== "") {
                state.posts.push(newPost)
            }
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostActionCreator>

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostActionCreator = (text:string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}

export default profileReducer