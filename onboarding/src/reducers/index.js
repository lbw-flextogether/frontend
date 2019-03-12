import {
    ADD_ROLE,
    ADD_INFO,
    ADD_TIMES,
    ADD_BUDDY,
} from '../actions';

const initialState = {
    name: '',
    email: '',
    phone_number: '',
    notification_preference: '',
    mobility_level: '',
    time_zone: '',
    availability: [],
    recipient_name: '',
    recipient_email: '',
    recipient_phone_number: '',
    receipient_mobility_level: '',
    role: '',
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ROLE:
           return {
               ...state,
               role: action.payload
           }
        case ADD_INFO:
           return {
               ...state,
               name: action.payload.name,
               email: action.payload.email,
               phone_number: action.payload.phone,
               notification_preference: action.payload.notification,
               mobility_level: action.payload.mobility
           }
        case ADD_TIMES:
           return {
               ...state,
               time_zone: action.payload.zone,
               availability: action.payload.time,
           }
        case ADD_BUDDY:
           return {
               ...state,
               recipient_name: action.payload.name,
               recipient_email: action.payload.email,
               recipient_phone_number: action.payload.phone,
               receipient_mobility_level: action.payload.mobility,
           }
        default:
            return state
    }
}