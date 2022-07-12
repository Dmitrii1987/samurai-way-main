
type PostType={
    id:number
    message:string
    counts:number
}
type DialogueType={
    id:number
    name:string
}
type MessageType={
    id:number
    message:string
}
type FriendType={
    id:number
    name:string
}
type SidebarPageType={
    friends:Array<FriendType>
}
type ProfilePageType={
    posts:Array<PostType>
}
type DialoguesPageType={
    dialogues: Array<DialogueType>
    messages: Array<MessageType>
}
export type RootStateType={
    profilePage: ProfilePageType
    dialoguesPage:DialoguesPageType
    sidebarPage: SidebarPageType
}



let state:RootStateType = {
    profilePage: {
        posts : [
            { id: 1, message: 'Hello! How are you?!', counts: 10 },
            { id: 2, message: 'This is my first post!', counts: 15 },
            { id: 3, message: 'This is my second post!', counts: 2 },
        ]
    },
    dialoguesPage: {
        dialogues : [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Vika' },
            { id: 3, name: 'Misha' },
            { id: 4, name: 'Sasha' }
        ],
        messages : [
            { id: 1, message: 'Hello!' },
            { id: 2, message: 'Give me Money!!!' },
            { id: 3, message: 'I Love You' },
            { id: 4, message: 'I need You at home' },
        ]
    },
    sidebarPage: {
        friends : [
            { id: 1, name: 'Sasha' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Michael' },
        ]
    }
}

export default state