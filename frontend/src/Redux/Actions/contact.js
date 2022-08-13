import { ALL_CONTACT, SINGLE_CONTACT, FETCH_ERROR, TOTAL_PAGE, LOADING, CONTACT_LOADING} from '../Constants/contact'
import axios from 'axios';
import { useSelector } from 'react-redux';

export const setAllContact = (payload)=> {
    return {
        type: ALL_CONTACT,
        payload: payload
    }
}

export const setSingleContact = (payload)=> {
    return {
        type: SINGLE_CONTACT,
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

export const setContactLoading = (payload) => {
    return{
        type: CONTACT_LOADING,
        payload: payload
    }
}


export const getAllContact = (page, pagesize) => (dispatch) =>{
    dispatch(setLoading(true))
    axios(`https://contact-app-neha.herokuapp.com/contact/get/all?page=${page}&pagesize=${pagesize}`)
    .then((res) => {
        let newData = res.data.contacts
            dispatch(setAllContact(newData)); 
            let pages = Math.ceil(res.data.totalpages);
    dispatch(setLoading(false))

            dispatch(setTotalPage(pages))
        // }
        
        
       
    }).catch(err => dispatch(SetFetchError(true)))
}

export const getSingleContact = (id) => (dispatch) =>{
    dispatch(setLoading(true))
    axios(`https://contact-app-neha.herokuapp.com/contact/get/one/${id}`)
    .then((res) => {
        dispatch(setSingleContact(res.data)); 
    dispatch(setLoading(false))

    }).catch(err => dispatch(SetFetchError(true)))
}