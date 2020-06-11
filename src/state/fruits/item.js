import t from 'tcomb';

const Item = t.struct({
	catID: t.union([t.String, t.Number]),
    prodDesc: t.String,
    prodID: t.union([t.String, t.Number]),
    prodName: t.String,
    prodPic: t.String,
    prodPrice: t.Number,
    prodQuant: t.Number
}, 'Item');

export default Item;
