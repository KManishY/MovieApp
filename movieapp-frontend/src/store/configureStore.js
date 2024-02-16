// store.js
import { createStore, applyMiddleware } from 'redux'; // Import applyMiddleware
import {thunk} from 'redux-thunk'; // Import redux-thunk middleware
import rootReducer from '../reducers/combineReducer';

const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply thunk middleware

export default store;
