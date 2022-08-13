import { ALL_MESSAGE, SINGLE_MESSAGE, FETCH_ERROR, TOTAL_PAGE, LOADING, MESSAGE_LOADING, CURRENT_MESSAGE} from '../Constants/message'


const initialState = {
    messages: [],
    singleMessage: {},
    fetchError: false,
    totalPage: 0,
    loading: false,
    currentMessage: '',
    messageLoading: false
}


export const messageReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_ERROR:
            return { ...state, fetchError: payload}
        case MESSAGE_LOADING:
            return { ...state, payload: payload}
        case ALL_MESSAGE:
            return {
                ...state, fetchError: false, messageLoading: false, 
                messages: [...state.messages, ...payload]
            }
        case SINGLE_MESSAGE:
            return { ...state, fetchError: false, singleMessage: payload}
        case TOTAL_PAGE:
            return {...state, totalPage: payload}
        case LOADING:
            return { ...state, loading: payload}
        case CURRENT_MESSAGE:
            return {...state, currentMessage: payload}
        default:
            return state
    }
}