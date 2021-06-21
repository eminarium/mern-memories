import * as api from '../api/index.js';
import {
    AUTH
} from '../constants/actionTypes.js';

export const signin = (formData, history) => async(dispatch) => {
    try {
        const { data } = api.signin(formData);

        dispatch({ type: AUTH, data });

        history.push('/')
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = api.signup(formData);

        dispatch({ type: AUTH, data });

        history.push('/')
    } catch (error) {
        console.log(error);
    }
}