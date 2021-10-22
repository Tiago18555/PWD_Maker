export const toggleShowList = () => {
    return {
        type: 'TOGGLE_SHOW_LIST'
    };
};
export const enableButton = (state) => {
    return {
        type: 'ENABLE_BUTTON',
        payload: state
    };
};
export const setEncodingType = (encoding) => {
    return {
        type: 'SET_ENCODINGTYPE',
        payload: encoding
    };
};
export const setInput = (input) => {
    return {
        type: 'SET_INPUT',
        payload: input
    };
};
export const setOutput = (output) => {
    return {
        type: 'SET_OUTPUT',
        payload: output
    }
}
export const setCopySize = (value) => {
    return {
        type: 'SET_COPYSIZE',
        payload: value
    }
}
