import { createStore, combineReducers } from 'redux'

import counterReducer, { incActionCreator, decActionCreator } from './state/counter'

const reducer = combineReducers({
    counter: counterReducer,

})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch(incActionCreator())
store.dispatch(decActionCreator())