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
let dialogues = [
    {id:1, name:'Dima'},
    {id:2, name:'Vika'},
    {id:3, name:'Misha'},
    {id:4, name:'Sasha'}
]
let messages = [
    {id:1, message:'Hello!'},
    {id:2, message:'Give me Money!!!'},
    {id:3, message:'I Love You'},
]
let dialoguesElements = dialogues.map( d => <DialogueItem name={d.name} id={d.id} />);
let messagesElements = messages.map(m => <Message dialogue={m.message} />)

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
             </div>

        </div>
    );
};

export default Dialogues;