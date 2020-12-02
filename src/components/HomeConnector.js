import { connect as reduxConnect } from "react-redux";
import { SET_USER } from "../actionTypes";

import Home from "./Home";
import { categories } from "../action-creator/organic";

function mapStateToProps(state) {
  return {
    categories: state.fruits.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCategories: () => {
      dispatch(categories(dispatch));
    },
    setUser: (user) => {
      dispatch({ type: SET_USER, user });
    },
  };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Home);
