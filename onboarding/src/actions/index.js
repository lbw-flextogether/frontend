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

export const CONFIRM_EMAIL_START = "CONFIRM_EMAIL_START";
export const CONFIRM_EMAIL_SUCCESS = "CONFIRM_EMAIL_SUCCESS";
export const CONFIRM_EMAIL_FAILURE = "CONFIRM_EMAIL_FAILURE";

export const confirmEmail = token => dispatch => {
    dispatch({ type: CONFIRM_EMAIL_START})
    axios.post(`https://flextogether.herokuapp.com/api/invite/${token}/verify`)
        .then(res => {
            dispatch({ type: CONFIRM_EMAIL_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: CONFIRM_EMAIL_FAILURE, payload: err })
        })
}

export const GET_BUDDY_START = "GET_BUDDY_START";
export const GET_BUDDY_SUCCESS = "GET_BUDDY_SUCCESS";
export const GET_BUDDY_FAILURE = "GET_BUDDY_FAILURE";

export const getBuddy = token => dispatch => {
    dispatch({ type: GET_BUDDY_START })
    return axios.get(`https://flextogether.herokuapp.com/api/invite/${token}`)
        .then(res => {
            dispatch({ type: GET_BUDDY_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_BUDDY_FAILURE, payload: err})
        })
}

export const CONFIRM_TIME_START = "CONFIRM_TIME_START";
export const CONFIRM_TIME_SUCCESS = "CONFIRM_TIME_SUCCESS";
export const CONFIRM_TIME_FAILURE = "CONFIRM_TIME_FAILURE";

export const confirmTime = (time, token) => dispatch => {
    dispatch({ type: CONFIRM_TIME_START })
    axios.post(`https://flextogether.herokuapp.com/api/invite/${token}/confirm`, time)
        .then(res => {
            dispatch({ type: CONFIRM_TIME_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: CONFIRM_TIME_FAILURE, payload: err })
        })
}

export const MANUAL_TIME_START = "MANUAL_TIME_START";
export const MANUAL_TIME_SUCCESS = "MANUAL_TIME_SUCCESS";
export const MANUAL_TIME_FAILURE = "MANUAL_TIME_FAILURE";

export const manualTime = (time, token) => dispatch => {
    console.log(time)
    dispatch({ type: MANUAL_TIME_START })
    axios.post(`https://flextogether.herokuapp.com/api/invite/${token}/manual_confirm`, time)
        .then(res=>{
            dispatch({ type: MANUAL_TIME_SUCCESS, payload: time })
        })
        .catch(err => {
            dispatch({ type: MANUAL_TIME_FAILURE, payload: err })
        })
}