import { Types } from '../actions';

const initialState = {
    switch: true,

};


export const switchReducer = (state = initialState, action) => {


    switch (action.type) {
        case Types.SWITCHMODE:
            return {
                ...state,
                switch: !state.switch
            };



        default:
            return state;
    }
}