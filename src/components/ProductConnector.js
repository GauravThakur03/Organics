import {connect as reduxConnect} from 'react-redux';

import Product from './Product';

function mapStateToProps(state) {
    return {
        cart: state.fruits.cart
    };
}

export default reduxConnect(mapStateToProps)(Product);
