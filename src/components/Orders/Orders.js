import React from "react";
import OrderColumns from "./OrderColumns";
import OrderList from "./OrderList";
import EmptyOrders from "./EmptyOrders";

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    this.onPhoneNumberEnter = this.onPhoneNumberEnter.bind(this);
  }
  onPhoneNumberEnter = (event) => {
    const phone = document.getElementById("mobilenum").value;
    const isValid = /^\d{10}$/.test(phone);
    if (isValid) {
      this.setState({ error: false });
      this.props.getStatus(phone);
    } else {
      this.setState({ error: true });
    }
  };
  render() {
    return (
      <>
        <div className="container min-height py-4">
          <div className="row">
            <h4 className="text-center mx-auto my-3">Track orders</h4>
          </div>
          <div className="row justify-content-center my-4">
            <div className="form-inline">
              <div className="form-group mx-sm-3 mb-2 position-relative">
                <input
                  type="text"
                  maxLength="10"
                  name="mobilenum"
                  className="form-control mb-2 mr-sm-2 mb-sm-0"
                  id="mobilenum"
                  required
                  aria-describedby="telHelp"
                  placeholder="Enter 10 digit mobile number"
                />
                <br />
                {this.state.error && (
                  <span className="text-danger position-absolute top-100">
                    Enter valid mobile number
                  </span>
                )}
              </div>
              <button
                onClick={this.onPhoneNumberEnter}
                className="btn btn-primary mb-2"
              >
                Check order status
              </button>
            </div>
          </div>
          <div className="row">
            <OrderColumns />
            {this.props.status.length ? (
              <OrderList orders={this.props.status} />
            ) : (
              <EmptyOrders />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Orders;
