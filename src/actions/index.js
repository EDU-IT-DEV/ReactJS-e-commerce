import unsplash from '../apis/unplash';

import {
    SIGN_IN,
    SIGN_OUT,
    //CREATE_CLOTHING,
    FETCH_CLOTHINGS,
    //FETCH_CLOTHING,
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

export const fetchClothings = () => async dispatch => {
    const response = await unsplash.get('/photos');
    dispatch({ type: FETCH_CLOTHINGS, payload: response.data});
};
