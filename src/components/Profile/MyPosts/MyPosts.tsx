import React, { ChangeEvent } from 'react'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profile-reducer'

import s from './MyPosts.module.css'
import Post from './Post/Post'

// let addPostActionCreator = () => {
//     return {
//         type: 'ADD-POST'
//     }
// }
// let updateNewPostActionCreator = (text:string | undefined) => {
//     return {
//         type: 'UPDATE-NEW-POST-TEXT',
//         newText: text
//     }
// }

const MyPosts = (props: any) => {

    let postsElements = props.posts.map((p: { message: string; counts: number }) => <Post message={p.message} counts={p.counts} />)


    let newPostElement= React.createRef<HTMLTextAreaElement>()
    //let newPostElement = useRef<HTMLTextAreaElement>(null)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
        //props.updateNewPostText('')
        //alert(123)
    }
    

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = newPostElement.current?.value
        //let action= {type: 'UPDATE-NEW-POST-TEXT', newText: text}
        //props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
       // console.log(text);
       props.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>

                <div>
                    <button onClick={addPost} >Add post</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts