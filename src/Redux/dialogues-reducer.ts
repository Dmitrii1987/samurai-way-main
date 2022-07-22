const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


const dialoguesReducer = (state: any, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ id: 6, message: body })
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        default:
            return state
    }

}

export type ActionsTypes = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export const updateNewMessageBodyCreator = (body: string | undefined) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }  as const
}


export default dialoguesReducer