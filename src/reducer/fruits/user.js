import { SET_USER } from '../../actionTypes';

const defaultState = {
    phone:"",
    name: '',
    email:'',
    address1: '',
    address2:'',
    landmark: '',
    pinCode:0,
    state: '',
    city:'',
    pinCode: 450000
};

function setUser(state, action) {
    return  {...state,...action.user};
}

export default function (state = defaultState, action) {
    const actionHandlers = {
        [SET_USER]: setUser
    };
    const reducer = actionHandlers[action.type];
    return reducer ? reducer(state, action) : state;
}
