import t from "tcomb";

const User = t.struct(
  {
    phone: t.String,
    name: t.String,
    email: t.String,
    address1: t.String,
    address2: t.String,
    landmark: t.String,
    pinCode: t.Number,
    state: t.String,
    city: t.String,
  },
  "User"
);

export default User;
