const defaultState = {
    cash: 0,
}

//action = {type:"", payload:""}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            console.log(action)
            return {...state, cash: state.cash + action.payload}
        case "GET_CASH":
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}
