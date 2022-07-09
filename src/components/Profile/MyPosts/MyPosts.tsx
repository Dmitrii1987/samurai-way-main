import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props:any) => {



let postsElements = props.posts.map((p: { message: string; counts: number })=> <Post message={p.message} counts={p.counts} />)

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