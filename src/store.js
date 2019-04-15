import { createStore } from 'redux'

const reducer = (state, action) => {
    console.log(state, action)

    return {
        number: 0,
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

