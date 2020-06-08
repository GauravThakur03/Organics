import { SET_CATEGORY, SET_ORDERS, GET_ORDERS } from "../actionTypes";
import { loadCategories, loadOrders } from "../services/organic";

export function categories() {
  return (dispatch) => {
    return loadCategories()
      .then(({ category }) => {
        dispatch({
          type: "SET_CATEGORY",
          category,
        });
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };
}

export function orders() {
  return (dispatch) => {
    return loadOrders()
      .then(({orders}) => {
        dispatch({
          type: 'SET_ORDERS',
          orders,
        });
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };
}
