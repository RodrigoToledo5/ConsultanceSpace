import reducerSearch from './reducerSearch';
import reducerPost from './reducersPost';
import reducerSign from '../../components/Sign/reducer';
import { combineReducers } from 'redux';

const rootReducer=combineReducers({reducerSearch,reducerPost,reducerSign})

export default rootReducer;