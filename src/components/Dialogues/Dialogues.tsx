import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogues.module.css'

type DialogueItemPropsType = {
    name: string
    id: number
}



const DialogueItem = (props: DialogueItemPropsType) => {
    let path = "/messages/" + props.id;
    return (
        <div className={s.dialogue}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>

    )
}

type MessagePropsType = {
    dialogue: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.dialogue}>
            {props.dialogue}
        </div>
    )
}

const Dialogues = () => {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <DialogueItem name={'Dima'} id={1} />
                <DialogueItem name={'Vika'} id={2} />
                <DialogueItem name={'Misha'} id={3} />
                <DialogueItem name={'Sasha'} id={4} />
            </div>
            <div className={s.messages}>
                <Message dialogue={'Hello!'} />
                <Message dialogue={'Give me Money!!!'} />
                <Message dialogue={'I Love You'} />
             </div>

        </div>
    );
};

export default Dialogues;