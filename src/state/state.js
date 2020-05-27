import t from 'tcomb';

import Fruits from './fruits';

const State = t.struct({
    fruits: Fruits
}, 'State');

export default State;
