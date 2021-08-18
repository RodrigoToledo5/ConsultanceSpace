import reducerSign from '../../components/Sign/reducer';
import { combineReducers } from 'redux';
import reducerLog from '../../components/Log/reducer';

const rootReducer=combineReducers({reducerSign,reducerLog})

export default rootReducer;