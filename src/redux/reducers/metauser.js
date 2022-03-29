import { Types } from '../actions';

const initialState = {
    address: [],
    connected: false

};


export const metauserReducer = (state = initialState, action) => {

console.log("add metamask", action)
    switch (action.type) {
        case Types.ADDMETAMASK:
            return {
                ...state,
                address: action.payload,
                connected: action.payload.length > 0 ? true : false
            };



        default:
            return state;
    }
}