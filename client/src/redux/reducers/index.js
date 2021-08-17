import reducerSearch from './reducerSearch';
import reducerPost from './reducersPost';
import reducerSign from '../../components/Sign/reducer';
import { combineReducers } from 'redux';
import reducerLog from '../../components/Log/reducer';

const rootReducer=combineReducers({reducerSearch,reducerPost,reducerSign,reducerLog})

export default rootReducer;