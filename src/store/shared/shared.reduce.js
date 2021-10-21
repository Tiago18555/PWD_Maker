import { combineReducers } from "redux"
import enableButtonReducer from "./enableButton.reducer"
import showEncodingListReducer from "./showEncoding.reducer"
import dataReducer from "./data.reducer"

const reducers = combineReducers({
    showEncoding: showEncodingListReducer,
    enableButton: enableButtonReducer,
    data: dataReducer,
});

export default reducers;