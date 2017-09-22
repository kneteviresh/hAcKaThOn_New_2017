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
        menQuantity: action.details.quantity,
        menSharePurchaseType: action.details.type,

      })

    case 'UPDATE_INVITES_DETAILS_MEN':
      var user = action.details.user;
      var newUser;
      if (user == "kavitha") {
        newUser = "viresh";
        var obj = {
          id: newUser,
          shared: false,
          requested: true,
          paymentDone: false,
          ordeStatus: "Not"
        }
        return Object.assign({}, state, {
          viresh: obj
        })
      }
      else {
        newUser = "kavitha";
        var obj = {
          id: newUser,
          shared: false,
          requested: true,
          paymentDone: false,
          ordeStatus: "Not"
        }
        return Object.assign({}, state, {
          kavitha: obj
        })
      }

    case 'UPDATE_PAYMENT_DETAILS':
    debugger;
      var user = action.user;
      var newUser;
      if (user == "viresh") {
        newUser = "kavitha";
        var obj = {
          id: newUser,
          shared: false,
          requested: true,
          paymentDone: true,
          ordeStatus: state[newUser].paymentDone ? 'success' : 'pending'
        }
        return Object.assign({}, state, {
          viresh: obj
        })
      }
      else {
        newUser = "viresh";
        var obj = {
          id: newUser,
          shared: false,
          requested: true,
          paymentDone: true,
          ordeStatus: state[newUser].paymentDone ? 'success' : 'pending'
        }
        return Object.assign({}, state, {
          kavitha: obj
        })
      }



    default:
      return state;

  }

}