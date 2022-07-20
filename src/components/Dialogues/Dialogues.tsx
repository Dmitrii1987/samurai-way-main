import React, { ChangeEvent } from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogues-reducer';

import DialogueItem from './DialogueItem/DialogueItem';
import s from './Dialogues.module.css'
import Message from './Message/Message';

const Dialogues = (props: any) => {

    let state = props.store.getState().dialoguesPage

    let dialoguesElements = state.dialogues.map((d: { name: string; id: number; }) =>
        <DialogueItem name={d.name} id={d.id} />);

    let messagesElements = state.messages.map((m: { message: string; }) =>
        <Message dialogue={m.message} />)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator)
    }
    let onNewMessageClick = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={onNewMessageClick}
                            value={newMessageBody}
                            placeholder='Enter your message' />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogues;