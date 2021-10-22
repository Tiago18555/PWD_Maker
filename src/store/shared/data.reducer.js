const initialData = { input: '', output: '', encoding: '', copysize: 0 }

const dataReducer = (state = initialData, action) => {
    switch(action.type) {
        case 'SET_INPUT':
            return ({
                input: action.payload,
                output: state.output,
                encoding: state.encoding,
                copysize: state.copysize
            })
        case 'SET_OUTPUT':
            return ({
                input: state.input,
                output: action.payload,
                encoding: state.encoding,
                copysize: state.copysize
            })
        case 'SET_ENCODINGTYPE':
            return ({
                input: state.input,
                output: state.output,
                encoding: action.payload,
                copysize: state.copysize
            })
        case 'SET_COPYSIZE':
            return ({
                input: state.input,
                output: state.output,
                encoding: state.encoding,
                copysize: action.payload
            })
        default:
            return state;
    }
}

export default dataReducer;