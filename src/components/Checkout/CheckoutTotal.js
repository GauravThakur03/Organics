import React from "react";
const CheckoutTotal = ({ subTotal }) => {
  const tempGst = subTotal * 0.12;
  const gst = parseFloat(tempGst.toFixed(2));
  const total = gst + subTotal;
  const data = [
    { label: "Sub Total", value: subTotal },
    { label: "GST", value: gst },
    { label: "Total", value: parseFloat(total.toFixed(2)) },
  ];

  return (
    <>
      {data.map((item, i) => (
        <li key={i} className="list-group-item d-flex justify-content-between">
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </li>
      ))}
    </>
  );
};

export default CheckoutTotal;
