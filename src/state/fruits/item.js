import t from 'tcomb';

const Item = t.struct({
    prodDesc: t.String,
    prodId: t.String,
    prodName: t.String,
    prodPic: t.String,
    prodPrice: t.Number,
    prodQuant: t.Number
}, 'Item');

export default Item;
