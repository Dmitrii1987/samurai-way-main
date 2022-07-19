import React from 'react';
import DialogueItem from './DialogueItem/DialogueItem';
import s from './Dialogues.module.css'
import Message from './Message/Message';

const Dialogues = (props:any) => {

let dialoguesElements = props.state.dialogues.map((d: { name: string; id: number; }) => 
<DialogueItem name={d.name} id={d.id} />);

let messagesElements = props.state.messages.map((m: { message: string; }) => 
<Message dialogue={m.message} />)

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