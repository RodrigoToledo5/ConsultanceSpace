import reducerSign from '../../components/Sign/reducer';
import { combineReducers } from 'redux';
import reducerLog from '../../components/Log/reducer';
import reducerSearchPatients from '../../components/Professional/reducerSearchPatient';
import reducerSearchProfesional from '../../components/Professional/reducerSearchProfesional';

const rootReducer=combineReducers({reducerSign,reducerLog, reducerSearchPatients, reducerSearchProfesional})

export default rootReducer;