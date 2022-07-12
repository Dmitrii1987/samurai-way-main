import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogues.module.css'

type DialogueItemPropsType = {
    name: string
    id: number
}

const DialogueItem = (props: DialogueItemPropsType) => {
    let path = "/messages/" + props.id;
    return (
        <div className={s.dialogue}>
            <NavLink to={path}>
                <div>{props.name}</div>
               
            </NavLink>
        </div>

    )
}

export default DialogueItem