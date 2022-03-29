import { combineReducers } from 'redux';
import { switchReducer } from './switch'
import { metauserReducer } from './metauser'
export default combineReducers({

    metauser: metauserReducer,
    switch: switchReducer,
    
})