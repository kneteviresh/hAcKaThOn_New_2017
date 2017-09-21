import {combineReducers} from "redux";
import tasks from "./taskReducer";

const allReducers = combineReducers({
    itemsDetails:tasks,
});

export default allReducers;