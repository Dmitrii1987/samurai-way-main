import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

let postData = [
    {id:1, message:'Hello! How are you?!',counts: 10 },
    {id:2, message:'This is my first post!', counts: 15}
]

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
                <Post message='Hello! How are you?' counts={10} />
                <Post message='This is my first post!' counts={15} />
            </div>
        </div>
    )
}

export default MyPosts