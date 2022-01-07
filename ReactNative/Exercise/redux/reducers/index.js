import { combineReducers } from "redux";
import authReducer from "./auth";
import recordReducer from "./record";

const rootReducer = combineReducers({
    record: recordReducer,
    auth: authReducer
})

export default rootReducer