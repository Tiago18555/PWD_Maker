const initialData = { input: '', output: '', encoding: '' }

const dataReducer = (state = initialData, action) => {
    switch(action.type) {
        case 'SET_INPUT':
            return ({
                input: action.payload,
                output: state.output,
                encoding: state.encoding
            })
        case 'SET_OUTPUT':
            return ({
                input: state.input,
                output: action.payload,
                encoding: state.encoding,
            })
        case 'SET_ENCODINGTYPE':
            return ({
                input: state.input,
                output: state.output,
                encoding: action.payload
            })
        default:
            return state;
    }
}

export default dataReducer;