import { legacy_createStore as createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';
import { composeWithDevTools } from "@redux-devtools/extension";

import { combineReducers } from 'redux';

import { contactReducer } from './Reducers/contact'


const rootReducer = combineReducers({
    contact: contactReducer
})

export const store = createStore(
    rootReducer,
    {},
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools(applyMiddleware(thunk))
)
