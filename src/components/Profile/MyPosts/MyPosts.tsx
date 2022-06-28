import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
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