import {connect as reduxConnect} from 'react-redux';

import Home from './Home';
import { categories } from '../action-creator/organic';

function mapStateToProps(state) {
    return {
        categories: state.fruits.categories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadCategories: () => {
            dispatch(categories());
        }
    };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Home);
