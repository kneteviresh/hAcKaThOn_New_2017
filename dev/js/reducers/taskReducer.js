import initialState from "./initialState";

export default function (state = initialState.promotionData, action) {
  switch (action.type) {
    case "UPDATE_PURCHASE_TYPE":
      return Object.assign({},
        state, {
          menPurchaseType: action.purchaseType
        })
    default:
      return state;
  }
}