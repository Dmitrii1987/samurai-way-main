import React from 'react';
import s from './Dialogues.module.css'



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

export default Message