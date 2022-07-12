import { NavLink } from 'react-router-dom'
import s from './Friends.module.css'

type FriendsType = {
    name: string
    id: number
}

const Friends = (props: FriendsType) => {

    return (
        <div className={s.item}>
            <img src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt="" className={s.avatar} />
            <div>{props.name}</div>
        </div>

    )
}

export default Friends