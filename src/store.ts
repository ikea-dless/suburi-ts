import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { counterReducer } from "reducers/counter"

export const store = () => createStore(counterReducer, composeWithDevTools())
