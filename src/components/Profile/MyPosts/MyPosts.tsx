import React, { useRef } from 'react'
import { text } from 'stream/consumers'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props: any) => {

    let postsElements = props.posts.map((p: { message: string; counts: number }) => <Post message={p.message} counts={p.counts} />)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    let addPost = () => {
        props.addPost(newPostElement.current?.value)
        alert(newPostElement.current?.value)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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