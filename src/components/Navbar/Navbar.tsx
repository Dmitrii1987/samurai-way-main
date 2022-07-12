
import { NavLink } from 'react-router-dom'
import Friends from './Friends'
import s from './Navbar.module.css'


const Navbar = () => {
    
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to={"/profile"} className={props => props.isActive ? `${s.item} ${s.activeLink}` : s.item} >
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/messages"} className={props => props.isActive ? `${s.item} ${s.activeLink}` : s.item} >
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/news"} className={props => props.isActive ? `${s.item} ${s.activeLink}` : s.item} >
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/music"} className={props => props.isActive ? `${s.item} ${s.activeLink}` : s.item} >
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/settings"} className={props => props.isActive ? `${s.item} ${s.activeLink}` : s.item} >
                    Settings
                </NavLink>
                {<h3>Friends</h3>}
                <Friends name={'Sasha'} id={1} />
                <Friends name={'Andrew'} id={2} />
                <Friends name={'Michael'} id={3} />
            </div>
        </nav>
    )
}

export default Navbar