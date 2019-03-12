import axios from 'axios';

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

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const postInfo = user => dispatch => {
    dispatch({ type: POST_START })
    axios.post('https://flextogether.herokuapp.com/api/invite/', user)
        .then(res => {
            dispatch({ type: POST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: POST_FAILURE, payload: err })
        })
}