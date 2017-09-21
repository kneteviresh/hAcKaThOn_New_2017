import initialState from "./initialState";

export default function(state=initialState.todos,action){
switch(action.type){
    case "ADDNEW_TASK":
    console.log(action.payload);
   // console.log(state.todos);
     return [...state,action.payload];
default:
     return state;
     
}

}