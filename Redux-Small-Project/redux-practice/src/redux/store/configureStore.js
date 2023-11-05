import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactReducer } from './../reducers/contactReducer';

const reducer = combineReducers({
    contactReducer
})

export const contactStore = configureStore({
    reducer
});