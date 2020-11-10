import _ from 'lodash';
import {
    FETCH_CLOTHING,
    FETCH_CLOTHINGS,
    CREATE_CLOTHING,
    EDIT_CLOTHING,
    DELETE_CLOTHING
} from '../actions/types';

export default (state = {}, action) => {
    
    switch (action.type) {
        case FETCH_CLOTHINGS:
            console.log("reducer FETCH_CLOTHINGS", action.payload);
            return { ...state, ..._.mapKeys(action.payload, 'id') };
            
        case FETCH_CLOTHING:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_CLOTHING:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_CLOTHING:
            console.log(state);
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_CLOTHING:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};