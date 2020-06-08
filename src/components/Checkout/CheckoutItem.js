import React from "react";

const CheckoutItem = ({ item }) => {
  const { prodName, prodDesc, prodPrice } = item;
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">{prodName}</h6>
        <small className="text-muted d-inline-block text-truncate" style={{"max-width":"150px"}}>{prodDesc}</small>
      </div>
      <span className="text-muted">&#8377; {prodPrice}</span>
    </li>
  );
};

export default CheckoutItem;
