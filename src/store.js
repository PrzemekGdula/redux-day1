import { createStore, combineReducers } from 'redux'

import counter, { incActionCreator, decActionCreator } from './state/counter'
import messages, { sendActionCreator } from './state/messages'

const reducer = combineReducers({
    counter,
    messages,
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const message1 = sendActionCreator('Mateusz', 'Ipsum')
const message2 = sendActionCreator('Tadeusz', 'Lorem')

console.log(message1, message2)

store.dispatch(message1)
store.dispatch(message2)
store.dispatch({
    type: 'messages/SEND',
    receiver: 'Ala',
    text: 'Ma kota',
})

export const sendMessage = (receiver, text) => (
    store.dispatch(
        sendActionCreator(receiver, text)
    )
)