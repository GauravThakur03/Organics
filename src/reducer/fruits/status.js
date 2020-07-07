import { SET_STATUS } from "../../actionTypes";

const defaultState = [];

function setStatus(state, action) {
  return action.status;
}

export default function (state = defaultState, action) {
  const actionHandlers = {
    [SET_STATUS]: setStatus,
  };
  const reducer = actionHandlers[action.type];
  return reducer ? reducer(state, action) : state;
}
