const INC = 'counter/INC'
const DEC = 'counter/DEC'

export const incActionCreator = () => ({
    type: INC
})

export const decActionCreator = () => ({
    type: DEC
})

const initialState = {
    number: 0,
}

export default (state = initialState, action) => {
    console.log(state, action)

    if (action.type === INC) {
        return {
            ...state,
            number: state.number + 1
        }
    }

    if (action.type === DEC) {
        return {
            ...state,
            number: state.number - 1
        }
    }

    return state
}

