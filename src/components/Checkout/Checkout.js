import React, {Component} from "react";
import CheckoutItem from "./CheckoutItem";
import { cartTotal, GST } from '../../utils';

class Checkout extends Component {
  componentDidMount() {
    this.props.loadOrders();
  }

  render() {
    const order = this.props.orders && this.props.orders.length ? this.props.orders[0]:null;
    const total = cartTotal(this.props.cart.cartItems);

    return (
      <div className="container">
      <div className="row py-5">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">{this.props.cart.count}</span>
          </h4>
          <ul className="list-group mb-3">
            
            {this.props.cart.cartItems.length && this.props.cart.cartItems.map((item,index)=><CheckoutItem key={index} item={item}/>)}
            <li className="list-group-item d-flex justify-content-between">
              <span>Sub Total</span>
              <strong>{total}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>GST</span>
              <strong>{GST}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong>{total + GST}</strong>
            </li>
          </ul>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Delivery address</h4>
          <address className="text-muted">
           <span>{order ? order.address1 : ''}</span><br/>
           <span>{order ? order.address2 : ''}</span><br/>
           <span>{order ? order.landmark : ''}</span><br/>
           <span>{order ? order.city : ''}</span><br/>
           <span>{order ? order.state : ''}</span><br/>
           <span>{order ? order.pinCode : ''}</span><br/>
          </address>

          <hr className="mb-4" />

          <h4 className="mb-3">Payment</h4>

          <div className="d-block my-3">
            <div className="custom-control custom-radio">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="custom-control-input"
                required=""
              />
              <label className="custom-control-label" htmlFor="credit">
                Cash / Card on delivery
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="custom-control-input"
                required=""
              />
              <label className="custom-control-label" htmlFor="credit">
                Credit card
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                className="custom-control-input"
                required=""
              />
              <label className="custom-control-label" htmlFor="debit">
                Debit card
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                className="custom-control-input"
                required=""
              />
              <label className="custom-control-label" htmlFor="paypal">
                Paypal
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="cc-name">Name on card</label>
              <input
                type="text"
                className="form-control"
                id="cc-name"
                placeholder=""
                required=""
              />
              <small className="text-muted">
                Full name as displayed on card
              </small>
              <div className="invalid-feedback">Name on card is required</div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="cc-number">Credit card number</label>
              <input
                type="text"
                className="form-control"
                id="cc-number"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label htmlFor="cc-expiration">Expiration</label>
              <input
                type="text"
                className="form-control"
                id="cc-expiration"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">Expiration date required</div>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="cc-expiration">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cc-cvv"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">Security code required</div>
            </div>
          </div>
          <hr className="mb-4" />
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Continue to checkout
          </button>
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
