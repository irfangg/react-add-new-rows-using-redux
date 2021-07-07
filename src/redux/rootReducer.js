import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';
import workLogReducer from './workLog/reducer';

export default combineReducers({
  worklogs: workLogReducer
});
