import t from 'tcomb';

const Category = t.struct({
    catID: t.union([t.String, t.Number]),
    catName: t.String,
    prodCount: t.Number
}, 'Category');

export default Category;
