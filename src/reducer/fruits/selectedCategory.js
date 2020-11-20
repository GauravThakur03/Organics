import { SET_SELECTED_CATEGORY } from "../../actionTypes";

const defaultState = {
  catID: 0,
  catName: "",
  catIcon: null,
  prodCount: 0,
  products: [],
};

function setCategory(state, action) {
  return { ...state, ...action.category };
}

export default function (state = defaultState, action) {
  const actionHandlers = {
    [SET_SELECTED_CATEGORY]: setCategory,
  };
  const reducer = actionHandlers[action.type];
  return reducer ? reducer(state, action) : state;
}
