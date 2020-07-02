import React, { Component } from "react";
import { cartTotal } from "../../utils";
import Address from "./Address";
import PaymentMethods from "./PaymentMethods";
import { Formik, Form } from "formik";
import Phone from "./Phone";
import ItemsAndTotal from "./ItemsAndTotal";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: null
    };
    this.onFormChange = this.onFormChange.bind(this);
  }
  componentDidMount() {
    this.props.loadOrders();
  }
  onFormChange(e) {
    const fieldName = e.target.name;
    const val = e.target.value;
    if (fieldName === "phone" && val) {
      if (val.match(/\d/g).length === 10) {
        this.props.loadUser(val);
        this.setState({phone: val});
      } else if (val.length === 10) {
        alert("Please enter valid 10 digit mobile number");
      }
    }
  }
  render() {
    const total = cartTotal(this.props.cart.cartItems);
    return (
      <div className="container">
        <div className="row py-5">
          <ItemsAndTotal cart={this.props.cart} total={total} />
          <div className="col-md-8 order-md-1">
            <Formik
              enableReinitialize={true}
              initialValues={this.props.user}
              onSubmit={(values) => {
                const order = {
                  amount: total,
                  items: this.props.cart.cartItems,
                  mobile: parseInt(this.state.phone),
                  ...values
                }
                this.props.generateOrder(order, this.state.phone).then((data) => {
                  alert('order created successfully...');
                  this.props.history.push('/home');
                })
              }}
            >
              <Form onChange={this.onFormChange} autoComplete="off">
                <Phone />
                <Address />
                <PaymentMethods />
                <hr className="mb-4" />
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Continue to checkout
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
