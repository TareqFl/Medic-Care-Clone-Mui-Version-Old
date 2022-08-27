import { POSTDATA, FETCHALLDATA, ADDAPPOINTMENT } from '../actions/types';

const INITIAL_STATE = {
    dataBase: [],
    appointments: []
};


const dbReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHALLDATA:

            return { ...state, dataBase: action.payload }


        case POSTDATA:
            return { ...state, dataBase: [...state.dataBase, action.payload] }

        case ADDAPPOINTMENT:
            return { ...state, appointments: [...state.appointments, action.payload] }
        default:
            return state;
    }
}


export default dbReducer