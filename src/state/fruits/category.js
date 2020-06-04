import t from 'tcomb';

import Product from './product';

const Category = t.struct({
    catID: t.union([t.String, t.Number]),
    catName: t.String,
    prodCount: t.Number,
    products: t.list(Product)
}, 'Category');

export default Category;
