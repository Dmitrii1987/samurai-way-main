import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogueItem from './DialogueItem';
import s from './Dialogues.module.css'
import Message from './Message';

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