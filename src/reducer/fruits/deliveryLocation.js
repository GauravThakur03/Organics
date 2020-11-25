import { SET_DELIVERY_LOCATION } from "../../actionTypes";
import { default_delivery_location_value } from "../../state/defaultStates";

function setLocation(state, action) {
  return action.deliveryLocation || state;
}

export default function (state = default_delivery_location_value, action) {
  const actionHandlers = {
    [SET_DELIVERY_LOCATION]: setLocation,
  };
  const reducer = actionHandlers[action.type];
  return reducer ? reducer(state, action) : state;
}