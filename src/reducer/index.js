import State from '../state/state';
import {combineAndWrapReducers} from './combine-and-wrap-reducers';
import {makeReducer as combineFruitsReducers} from './fruits';

export function makeReducer() {
    const reducers = {
        fruits: combineFruitsReducers()
    };

    return combineAndWrapReducers(reducers, State);
}
