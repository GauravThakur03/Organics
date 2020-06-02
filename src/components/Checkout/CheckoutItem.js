import React from "react";

const CheckoutItem = ({ item }) => {
  const { title, info, price } = item;
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">{title}</h6>
        <small className="text-muted d-inline-block text-truncate" style={{"max-width":"150px"}}>{info}</small>
      </div>
      <span className="text-muted">&#8377; {price}</span>
    </li>
  );
};

export default CheckoutItem;
