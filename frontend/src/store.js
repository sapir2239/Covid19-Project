import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {citizenListReducers, citizenCreateReducers, citizenByCityReducers, citizenByDateReducers} from "./reducers/citizenReducers"
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
    citizenList: citizenListReducers,
    citizenCreate: citizenCreateReducers,
    citizenByCity: citizenByCityReducers,
    citizenByDate: citizenByDateReducers,
});

const initialState = {};

const middleWare = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;

