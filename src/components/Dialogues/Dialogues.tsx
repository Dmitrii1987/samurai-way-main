import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogues.module.css'


const Dialogues = () => {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <div className={s.dialogue}>
                    <NavLink to={"/messages/1"}>
                        Dima
                    </NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to={"/messages/2"}>
                        Vika
                    </NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to={"/messages/3"}>
                        Misha
                    </NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to={"/messages/4"}>
                        Sasha
                    </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialogue}>
                    Hello!!!
                </div>
                <div className={s.dialogue}>
                    Give me Money!!!
                </div>
                <div className={s.dialogue}>
                    I love u!
                </div>
            </div>

        </div>
    );
};

export default Dialogues;