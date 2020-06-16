import React, { Component, useCallback } from "react";
import { cartTotal } from "../../utils";
import Address from "./Address";
import PaymentMethods from "./PaymentMethods";
import { Formik, Form } from "formik";
import Phone from "./Phone";
import ItemsAndTotal from "./ItemsAndTotal";

class Checkout extends Component {
  constructor(props) {
    super(props);
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
      } else if (val.length === 10) {
        alert("Please enter valid 10 digit mobile number");
      }
    }
  }
  render() {
    console.log(this.props.user);
    const order =
      this.props.orders && this.props.orders.length
        ? this.props.orders[0]
        : null;
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
                alert(JSON.stringify(values, null, 2));
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

const cart = [
  {
    id: 6,
    title: "Fresho Watermelon",
    img: "img/product-6.png",
    price: 38,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 7,
    title: "Fresho Pomegranate",
    img: "img/product-7.png",
    price: 159,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 8,
    title: "Orange - Nagpur, Regular",
    img: "img/product-8.png",
    price: 88,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
  },
];
