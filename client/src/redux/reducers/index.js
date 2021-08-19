import reducerSign from '../../components/Sign/reducer';
import { combineReducers } from 'redux';
import reducerLog from '../../components/Log/reducer';
import reducerProfesional from '../../components/Professional/reducers'

const rootReducer=combineReducers({reducerSign,reducerLog, reducerProfesional})

export default rootReducer;