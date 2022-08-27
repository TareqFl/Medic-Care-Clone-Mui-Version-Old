import { FETCHALLDATA, POSTDATA, ADDAPPOINTMENT } from './types';

import api from '../api'




export const addAppointment = (value) => {
    return {
        type: ADDAPPOINTMENT,
        payload: value
    }
}

export const fetchAllData = () => async dispatch => {
    const response = await api.get('/')


    dispatch({
        type: FETCHALLDATA,
        payload: response.data
    })
}


export const postData = (value) => async dispatch => {
    const response = await api.post('/post', { ...value });
    dispatch({
        type: POSTDATA,
        payload: response.data
    })
}



