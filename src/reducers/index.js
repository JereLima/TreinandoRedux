import {combineReducers} from 'redux';
import AuthReducer from '../reducers/AuthReducer';

const Reducers = combineReducers({
  Auth: AuthReducer,
});
export default Reducers;
