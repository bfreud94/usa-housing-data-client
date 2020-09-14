import { combineReducers } from 'redux';
import housingDataReducer from './housingDataReducer';

export default combineReducers({
    housingData: housingDataReducer
});