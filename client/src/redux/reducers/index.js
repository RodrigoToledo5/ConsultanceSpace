import reducerSign from '../../components/Sign/reducer';
import { combineReducers } from 'redux';
import reducerLog from '../../components/Log/reducer';
import reducerSearchPatients from '../../components/Professional/reducerSearchPatient';
import reducerSearchProfesional from '../../components/Professional/reducerSearchProfesional';
import reducerAddPatients from '../../components/Professional/reducerAddPatients';
import reducerPatient from '../../components/Patient/ReducersPatients'
import reducerUpdate from '../../components/Header/Buttons/redux/reducerUpdate';

const rootReducer=combineReducers(
    {reducerSign,
    reducerLog,
    reducerSearchPatients,
    reducerSearchProfesional,
    reducerAddPatients,
    reducerPatient,
    reducerUpdate,
})

export default rootReducer;