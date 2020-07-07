import { connect as reduxConnect } from "react-redux";

import Orders from "./Orders";
import {status} from "../../action-creator/organic";

function mapStateToProps(state) {
  return {
    status:state.fruits.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
   
    getStatus: (phone) => {
      dispatch(status(dispatch, phone));
    }
  };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Orders);
