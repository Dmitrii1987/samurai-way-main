
type PostPropsType={
    id:number
    message:string
    counts:number
}
type DialoguePropsType={
    id:number
    name:string
}
type MessagePropsType={
    id:number
    message:string
}
type SidebarPropsType={}
type ProfilePagePropsType= Array<PostPropsType>


let state = {
    profilePage: {
        posts : [
            { id: 1, message: 'Hello! How are you?!', counts: 10 },
            { id: 2, message: 'This is my first post!', counts: 15 }
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
        ]
    },
    sidebar:{
        
    }
}

export default state