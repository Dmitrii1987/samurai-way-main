//import { _callSubscriber } from ".."

type PostType = {
    id: number
    message: string
    counts: number
}
type DialogueType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type FriendType = {
    id: number
    name: string
}
type SidebarPageType = {
    friends: Array<FriendType>
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: any
}
type DialoguesPageType = {
    dialogues: Array<DialogueType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialoguesPage: DialoguesPageType
    sidebarPage: SidebarPageType
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello! How are you?!', counts: 10 },
                { id: 2, message: 'This is my first post!', counts: 15 },
                { id: 3, message: 'This is my second post!', counts: 2 },
            ],
            newPostText: ''
        },
        dialoguesPage: {
            dialogues: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Vika' },
                { id: 3, name: 'Misha' },
                { id: 4, name: 'Sasha' }
            ],
            messages: [
                { id: 1, message: 'Hello!' },
                { id: 2, message: 'Give me Money!!!' },
                { id: 3, message: 'I Love You' },
                { id: 4, message: 'I need You at home' },
            ]
        },
        sidebarPage: {
            friends: [
                { id: 1, name: 'Sasha' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Michael' },
            ]
        }
    },
    _callSubscriber(state: RootStateType) {
        console.log('state has been changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         counts: 0
    //     }
    //     if (this._state.profilePage.newPostText !== '') {
    //         this._state.profilePage.posts.push(newPost)
    //     }
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state)
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    // },
    dispatch(action: any) {                 // action -это объект, который описывает какое д-е совершить
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                counts: 0
            }
            if (this._state.profilePage.newPostText !== '') {
                this._state.profilePage.posts.push(newPost)
            }
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)

        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostActionCreator = (text:string | undefined) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default store

// let state:RootStateType = {
//     profilePage: {
//         posts : [
//             { id: 1, message: 'Hello! How are you?!', counts: 10 },
//             { id: 2, message: 'This is my first post!', counts: 15 },
//             { id: 3, message: 'This is my second post!', counts: 2 },
//         ],
//         newPostText: ''
//     },
//     dialoguesPage: {
//         dialogues : [
//             { id: 1, name: 'Dima' },
//             { id: 2, name: 'Vika' },
//             { id: 3, name: 'Misha' },
//             { id: 4, name: 'Sasha' }
//         ],
//         messages : [
//             { id: 1, message: 'Hello!' },
//             { id: 2, message: 'Give me Money!!!' },
//             { id: 3, message: 'I Love You' },
//             { id: 4, message: 'I need You at home' },
//         ]
//     },
//     sidebarPage: {
//         friends : [
//             { id: 1, name: 'Sasha' },
//             { id: 2, name: 'Andrew' },
//             { id: 3, name: 'Michael' },
//         ]
//     }
// }

// let _callSubscriber = (state:RootStateType)=> {
//     console.log('state has been changed');
// }


// export let addPost = ()=> {
//     let newPost = {
//         id: 5,
//         message:state.profilePage.newPostText ,
//         counts: 0
//     }
//     if (state.profilePage.newPostText !== '') {
//     state.profilePage.posts.push(newPost)}
//     state.profilePage.newPostText=''
//     _callSubscriber(state)
// }

// export let updateNewPostText=(newText:string)=>{
//     state.profilePage.newPostText = newText
//     _callSubscriber(state)
// }

// export const subscribe = (observer:any) => {
//     _callSubscriber = observer
// }

