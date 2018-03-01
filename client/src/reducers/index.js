import { combineReducers } from 'redux';

import authReducer from './authReducer';
import laneReducer from './laneReducer';
import noteReducer from './noteReducer';

export default combineReducers({
  auth: authReducer,
  lane: laneReducer,
  note: noteReducer
});
