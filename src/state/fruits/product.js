import t from 'tcomb';

const Product = t.struct({
    catID: t.maybe(t.String),
    catName: t.maybe(t.String),
    prodDesc: t.String,
    prodID: t.union([t.String, t.Number]),
    prodName: t.String,
    prodPic: t.String,
    prodPrice: t.Number,
    prodQuant: t.Number,
    prodUnit: t.String,
    varID: t.String,
    varName: t.String
}, 'Product');

export default Product;
