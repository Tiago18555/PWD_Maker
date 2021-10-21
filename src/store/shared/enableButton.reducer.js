export const enableButtonReducer = (state = false, action) => {
    switch(action.type) {
        case 'ENABLE_BUTTON': return action.payload
        default: return state
    }
}

export default enableButtonReducer;