import { createStore } from 'redux'

const initialState = {
    number: 0,
}

const reducer = (state = initialState, action) => {
    console.log(state, action)

    if (action.type === 'INC') {
        return {
            ...state,
            number: state.number + 1
        }
    }
    if (action.type === 'DEC') {
        return {
            ...state,
            number: state.number -1
        }
    }
    return state
}


export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const incAction = {
    type: 'INC'
}

const decAction = {
    type: 'DEC'
}

store.dispatch(incAction)
store.dispatch(decAction)