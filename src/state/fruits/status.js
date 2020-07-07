import t from "tcomb";

const Status = t.struct(
  {
    id: t.Number,
    orderID: t.String,
    prodID: t.Number,
    catID: t.Number,
    prodName: t.String,
    prodPrice: t.String,
    prodQuant: t.String,
    amount: t.String,
    email: t.String,
    address1: t.String,
    address2: t.String,
    landmark: t.String,
    city: t.String,
    state: t.String,
    pinCode: t.Number,
    mobile: t.String,
    status: t.String,
  },
  "Status"
);

export default Status;
