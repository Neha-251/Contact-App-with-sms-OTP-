import { ALL_CONTACT, SINGLE_CONTACT, FETCH_ERROR, TOTAL_PAGE, LOADING, CONTACT_LOADING} from '../Constants/contact'


const initialState = {
    contacts: [],
    singleContact: {},
    fetchError: false,
    totalPage: 0,
    loading: false,
    contactLoading: false
}


export const contactReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_ERROR:
            return { ...state, fetchError: payload}
        case CONTACT_LOADING:
            return { ...state, payload: payload}
        case ALL_CONTACT:
            return { ...state, fetchError: false, contactLoading: false,  contacts: payload}
        case SINGLE_CONTACT:
            return { ...state, fetchError: false, singleContact: payload}
        case TOTAL_PAGE:
            return {...state, totalPage: payload}
        case LOADING:
            return { ...state, loading: payload}
        default:
            return state
    }
}