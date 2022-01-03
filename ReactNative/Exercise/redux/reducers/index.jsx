import { combineReducers } from "redux";

import recordReducer from "./record";

const rootReducer = combineReducers({
    record: recordReducer,
})

export default rootReducer