import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import clothingReducer from './clothingReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  clothings: clothingReducer
});
