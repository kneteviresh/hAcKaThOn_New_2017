import initialState from "./initialState";

export default function (state = initialState.itemsDetails, action) {
  debugger;
  switch (action.type) {
    case "UPDATE_PURCHASE_TYPE_MEN":
      return Object.assign({}, state, {
        menPurchaseType: action.value
      })

    case "UPDATE_PURCHASE_TYPE_WOMEN":
      return Object.assign({}, state, {
        womenPurchaseType: action.value
      })
    default:
      return state;

  }

}