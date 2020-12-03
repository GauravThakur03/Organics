import {
  SET_CATEGORY,
  SET_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  SET_ORDERS,
  SET_USER,
  SET_STATUS,
  SET_SELECTED_CATEGORY,
  SET_DELIVERY_LOCATION,
} from "../actionTypes";
import {
  checkDeliveryArea,
  loadCategories,
  loadOrders,
  loadUser,
  processOrder,
  loadStatus,
  callLoginApi,
  callRegisterApi
} from "../services/organic";

export function categories() {
  return (dispatch) => {
    return loadCategories()
      .then(({ category }) => {
        dispatch({
          type: SET_CATEGORY,
          category,
        });
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };
}

export function setSelectedCategory(category) {
  return {
    category,
    type: SET_SELECTED_CATEGORY,
  };
}

export function addToCart(cartItem) {
  return {
    cartItem,
    type: SET_CART,
  };
}

export function increaseQuantity(prodID) {
  return {
    prodID,
    type: INCREASE_QTY,
  };
}

export function deacreaseQuantity(prodID) {
  return {
    prodID,
    type: DECREASE_QTY,
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}

export function removeFromCart(prodID) {
  return {
    prodID,
    type: REMOVE_CART_ITEM,
  };
}

export function orders() {
  return (dispatch) => {
    return loadOrders()
      .then(({ orders }) => {
        dispatch({
          type: SET_ORDERS,
          orders,
        });
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };
}

export const defaultUserObject = {
  phone: "",
  name: "",
  address1: "",
  address2: "",
  landmark: "",
  pinCode: 0,
  state: "",
  city: "",
};

export function user(mobileNumber) {
  return (dispatch) => {
    return loadUser(mobileNumber)
      .then((user) => {
        dispatch({
          type: SET_USER,
          user: user || defaultUserObject,
        });
        localStorage.setItem("mamidikayaluUser", JSON.stringify(user));
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };
}

export function registerUser(data, cb) {
  return (dispatch) => {
    return callRegisterApi(data)
      .then((msg = {}) => {
        cb(msg);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };
}

export function login(data, errorCallback) {
  return (dispatch) => {
    return callLoginApi(data)
      .then((user = defaultUserObject) => {
        if (user?.name) {
          dispatch({
            type: SET_USER,
            user: user,
          });
          localStorage.setItem("mamidikayaluUser", JSON.stringify(user));
        } else {
          errorCallback(user);
        }
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };
}

export function generateOrder(order, phone) {
  return (dispatch) => {
    return processOrder(order, phone)
      .then((response) => {
        dispatch(clearCart());
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };
}

export function status() {
  return (dispatch) => {
    return loadStatus(arguments[1])
      .then(({ data }) => {
        dispatch({
          type: SET_STATUS,
          status: data || [],
        });
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };
}

export function checkPincode(pincode) {
  return (dispatch) => {
    return checkDeliveryArea(pincode)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };
}

export function setDeliveryLocation(deliveryLocation) {
  return {
    deliveryLocation,
    type: SET_DELIVERY_LOCATION,
  };
}
