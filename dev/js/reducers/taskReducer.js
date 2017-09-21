import initialState from "./initialState";

export default function (state = initialState.itemsDetails, action) {

  switch (action.type) {
    case "UPDATE_PURCHASE_TYPE_MEN":
      return Object.assign({}, state, {
        menPurchaseType: action.value
      })

    case "UPDATE_PURCHASE_TYPE_WOMEN":
      return Object.assign({}, state, {
        womenPurchaseType: action.value
      })

    case 'UPDATE_QUANTITY_MEN':
      return Object.assign({}, state, {
        menQuantity: action.value
      })
    default:
      return state;

  }

}