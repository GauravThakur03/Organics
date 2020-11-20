import { SET_SELECTED_CATEGORY } from "../../actionTypes";
import { default_selected_cat } from "../../state/defaultStates";

function setCategory(state, action) {
  return { ...state, ...action.category };
}

export default function (state = default_selected_cat, action) {
  const actionHandlers = {
    [SET_SELECTED_CATEGORY]: setCategory,
  };
  const reducer = actionHandlers[action.type];
  return reducer ? reducer(state, action) : state;
}
