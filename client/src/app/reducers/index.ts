import { combineReducers } from 'redux'
import { ADD_TENEMENTITEM } from '../actions'

function addTenementItem(state={},action) {
    switch(action.type){
        case ADD_TENEMENTITEM:
            return action.tenementItem
        default:
            return state
    }
}

const rootReducer=combineReducers({
    addTenementItem
});

export default rootReducer;