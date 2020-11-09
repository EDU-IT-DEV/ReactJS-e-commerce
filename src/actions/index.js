import clothings from '../apis/clothings';

import {
    SIGN_IN,
    SIGN_OUT,
    //CREATE_CLOTHING,
    //FETCH_CLOTHINGS,
    FETCH_CLOTHING,
    //DELETE_CLOTHING,
    //EDIT_CLOTHING
} from './types';


export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const fetchClothing = id => async dispatch => {
    const response = await clothings.get(`/clothings/${id}`);

    dispatch({ type: FETCH_CLOTHING, payload: response.data });
};