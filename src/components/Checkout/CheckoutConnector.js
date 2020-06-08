import { connect as reduxConnect } from "react-redux";

import Checkout from "./Checkout";
import { orders } from "../../action-creator/organic";

function mapStateToProps(state) {
  return {
    orders: state.fruits.orders,
    cart: state.fruits.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadOrders: () => {
      dispatch(orders(dispatch));
    },
  };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Checkout);
