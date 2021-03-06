import t from "tcomb";

const Product = t.struct(
  {
    catID: t.maybe(t.union([t.String, t.Number])),
    catName: t.maybe(t.String),
    prodDesc: t.String,
    prodID: t.union([t.String, t.Number]),
    prodName: t.String,
    prodPic: t.String,
    prodPrice: t.Number,
    prodQuant: t.Number,
    prodUnit: t.String,
    prodAvailable: t.String,
    varID: t.String,
    varName: t.String,
    prodBestsellers: t.maybe(t.Boolean),
    prodDeals: t.maybe(t.Boolean)
    
  },
  "Product"
);

export default Product;
