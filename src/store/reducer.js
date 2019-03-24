import { combineReducers } from 'redux';
import headerReducer from '../components/Header/reducer';
import HomeReducer from '../components/Home/reducer';
import DetailReducer from '../components/Detail/reducer';
import LoginReducer from '../components/Login/reducer';

export default combineReducers({
    header: headerReducer,
    home: HomeReducer,
    detail: DetailReducer,
    login: LoginReducer
});