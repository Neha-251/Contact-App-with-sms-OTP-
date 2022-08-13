import { ALL_MESSAGE, SINGLE_MESSAGE, FETCH_ERROR, TOTAL_PAGE, LOADING, MESSAGE_LOADING, CURRENT_MESSAGE} from '../Constants/message'
import axios from 'axios';

export const setAllMessage = (payload)=> {
    return {
        type: ALL_MESSAGE,
        payload: payload
    }
}

export const setSingleMessage = (payload)=> {
    return {
        type: SINGLE_MESSAGE,
        payload: payload
    }
}

export const SetFetchError = (payload)=> {
    return {
        type: FETCH_ERROR,
        payload: payload
    }
}

export const setTotalPage = (payload) => {
    return {
        type: TOTAL_PAGE,
        payload: payload
    }
}

export const setLoading = (payload) => {
    return {
        type: LOADING,
        payload: payload
    }
}

export const setMessageLoading = (payload) => {
    return{
        type: MESSAGE_LOADING,
        payload: payload
    }
}

export const setCurrentMessage = (payload) => {
    return {
        type: CURRENT_MESSAGE,
        payload: payload
    }
}

export const getAllMessage = (page, pagesize) => (dispatch) =>{
    dispatch(setLoading(true))

    axios(`https://contact-app-neha.herokuapp.com/message/get/all?page=${page}&pagesize=${pagesize}`)
    .then((res) => {
        let newData = res.data.messages
            dispatch(setAllMessage(newData)); 
            let pages = Math.ceil(res.data.totalpages);
            dispatch(setTotalPage(pages))
    dispatch(setLoading(false))

       
    }).catch(err => dispatch(SetFetchError(true)))
}

export const getSingleMessage = (id) => (dispatch) =>{
    dispatch(setLoading(true))

    axios(`https://contact-app-neha.herokuapp.com/message/get/one/${id}`)
    .then((res) => {
        dispatch(setSingleMessage(res.data)); 
    dispatch(setLoading(false))

    }).catch(err => dispatch(SetFetchError(true)))
}