import reducerSearch from './reducerSearch';
import reducerPost from './reducersPost';
import { combineReducers } from 'redux';

const rootReducer=combineReducers({reducerSearch,reducerPost})

export default rootReducer;