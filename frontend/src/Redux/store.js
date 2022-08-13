import { legacy_createStore as createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';
import { composeWithDevTools } from "@redux-devtools/extension";

import { combineReducers } from 'redux';

import { contactReducer } from './Reducers/contact'
import { messageReducer } from './Reducers/message'


const rootReducer = combineReducers({
    contact: contactReducer,
    message: messageReducer
})

export const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)



