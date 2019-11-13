import { SAVE_GAME } from '../actions/saveGameAction';

const initialState = {
  savedGames: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_GAME:
      return { ...state, savedGames: [...state.savedGames, action.payload] };
    default:
      return state;
  }
};

export default reducer;
