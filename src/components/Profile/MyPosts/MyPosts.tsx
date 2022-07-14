import React, { useRef } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props: any) => {

    let postsElements = props.posts.map((p: { message: string; counts: number }) => <Post message={p.message} counts={p.counts} />)


    let newPostElement= React.createRef<HTMLTextAreaElement>()
    //let newPostElement = useRef<HTMLTextAreaElement>(null)

    let addPost = () => {
        props.addPost()
        //props.updateNewPostText('')   //зануляет поле вводе посла отправки поста
        //alert(text)
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        props.updateNewPostText(text)
        console.log(text);
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