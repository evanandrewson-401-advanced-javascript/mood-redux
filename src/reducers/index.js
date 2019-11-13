import { combineReducers } from 'react-redux';
import game from './gameReducer';
import history from './historyReducer';

export default combineReducers({
  game,
  history
});
