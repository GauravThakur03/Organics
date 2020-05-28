import t from 'tcomb';

const Category = t.struct({
    catID: t.String,
    catName: t.String,
    prodCount: t.Number
}, 'Category');

export default Category;
