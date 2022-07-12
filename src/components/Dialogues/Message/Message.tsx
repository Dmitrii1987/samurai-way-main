import React, { useRef } from 'react';
import s from './../Dialogues.module.css'



type MessageType = {
    dialogue: string
}

const Message = (props: MessageType) => {

let newMessageElement = useRef<HTMLTextAreaElement>(null)
const addMessage = ()=> {
alert(newMessageElement.current?.value)
}

    return (
        <div className={s.dialogue}>
            <textarea ref={newMessageElement}>
                {props.dialogue}
            </textarea>
            <button onClick={addMessage}>send</button>
        </div>
    )
}

export default Message