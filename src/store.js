import { createStore } from 'redux'

const reducer = (state, action) => {
    console.log(state, action)

    return {
        number: 0,
    }
}

export const store = createStore(reducer)

console.log(store)
console.log(store.getState())
