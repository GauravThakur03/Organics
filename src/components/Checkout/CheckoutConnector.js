import { connect as reduxConnect } from "react-redux";

import Checkout from "./Checkout";
import { orders, user, generateOrder } from "../../action-creator/organic";

function mapStateToProps(state) {
  return {
    orders: state.fruits.orders,
    cart: state.fruits.cart,
    user:state.fruits.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadOrders: (phone) => {
      dispatch(orders(phone));
    },
    loadUser: (phone) => {
      dispatch(user(dispatch, phone));
    },
    generateOrder: (order, phone) => {
      return dispatch(generateOrder(order, phone));
    }
  };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Checkout);
