import { combineReducers } from "redux";

import dbReducer from "./dbReducer";

export default combineReducers({
    dataBaseApi: dbReducer
})