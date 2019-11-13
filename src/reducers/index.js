import { combineReducers } from 'redux';
import game from './gameReducer';
import history from './historyReducer';

export default combineReducers({
  game,
  history
});
