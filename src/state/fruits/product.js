import t from 'tcomb';

const Product = t.struct({
    catID: t.String,
    catName: t.String,
    prodDesc: t.String,
    prodID: t.String,
    prodName: t.String,
    prodPic: t.String,
    prodPrice: t.Number,
    prodQuant: t.Number,
    varID: t.String,
    varName: t.String
}, 'Product');

export default Product;
