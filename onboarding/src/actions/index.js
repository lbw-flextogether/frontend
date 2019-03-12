// import axios from 'axios';

export const ADD_ROLE = "ADD_ROLE";

export const addRole = role => {
    return {
        type: ADD_ROLE,
        payload: role,
    }
}

export const ADD_INFO = "ADD_INFO";

export const addInfo = user => {
    return {
        type: ADD_INFO,
        payload: user
    }
}

export const ADD_TIMES = "ADD_TIMES";

export const addTimes = (time, zone) => {
    return {
        type: ADD_TIMES,
        payload: {
            time,
            zone
        }
    }
}

export const ADD_BUDDY = "ADD_BUDDY";

export const addBuddy = buddy => {
    return {
        type: ADD_BUDDY,
        payload: buddy,
    }
}