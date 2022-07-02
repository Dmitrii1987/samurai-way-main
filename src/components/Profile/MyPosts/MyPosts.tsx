import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

let posts = [
    {id:1, message:'Hello! How are you?!',counts: 10 },
    {id:2, message:'This is my first post!', counts: 15}
]

let postsElements = posts.map(p=> <Post message={p.message} counts={p.counts} />)

    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3> 
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <div>
                    <button>Add post</button>
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