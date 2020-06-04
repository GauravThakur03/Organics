import { SET_CART } from '../../actionTypes';

const defaultState = {
	count: 1,
	cartItems: [
		{
          "prodID": 1,
          "prodName": "Banganapalli Mango",
          "prodPic": "img/product-1.png",
          "prodPrice": 175,
          "prodDesc": "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Tax idermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
          "prodQuant": 1
        }
	]
};

function setCart(state, action) {
    return  action.cart;
}

export default function (state = defaultState, action) {
    const actionHandlers = {
        [SET_CART]: setCart
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
