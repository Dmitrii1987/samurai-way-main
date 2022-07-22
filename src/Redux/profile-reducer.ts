const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                counts: 0
            }
            state.posts.push(newPost)
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
export const updateNewPostActionCreator = (text:string | undefined) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}

export default profileReducer