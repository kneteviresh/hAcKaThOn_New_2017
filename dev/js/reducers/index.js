import {combineReducers} from "redux";
import tasks from "./taskReducer";


const allReducers = combineReducers({
    tasks:tasks,
  
});

export default allReducers;