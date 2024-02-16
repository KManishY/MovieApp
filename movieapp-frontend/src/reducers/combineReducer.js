import { combineReducers } from 'redux';
import movieReducer from './movieReducer';


const rootReducer = combineReducers({
  movies: movieReducer,
  // Add more reducers if needed
});

export default rootReducer;