import { SET_CATEGORY } from '../actionTypes';
import { loadCategories } from '../services/organic';

export function categories() {
	return (dispatch) => {
	    return loadCategories()
	        .then(({category}) => {
	            dispatch({
	            	type: 'SET_CATEGORY',
	            	category
	            })
	        })
	        .catch((error) => {
	            return Promise.reject(error);
	        });
	}
}