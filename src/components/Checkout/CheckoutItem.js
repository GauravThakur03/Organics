import React from "react";

const CheckoutItem = ({ item }) => {
  const { prodName, prodDesc, prodPrice, prodQuant } = item;
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">{prodName}</h6>
        <small className="text-muted d-inline-block text-truncate" style={{"maxWidth":"150px"}}>{prodDesc}</small>
      </div>
      <span className="text-muted">&#8377; {prodQuant * prodPrice}</span>
    </li>
  );
};

export default CheckoutItem;
