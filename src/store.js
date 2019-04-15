import { createStore } from 'redux'

import reducer, { incActionCreator, decActionCreator } from './state/counter'

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch(incActionCreator())
store.dispatch(decActionCreator())