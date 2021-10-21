export const showEncodingListReducer = (state = false, action) => {
    switch(action.type){
        case 'TOGGLE_SHOW_LIST': return !state
        default: return state
    }
}

export default showEncodingListReducer;