import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className='posts'>
                    <div className='item'>
                        post 1
                    </div>
                    <div className='item'>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile