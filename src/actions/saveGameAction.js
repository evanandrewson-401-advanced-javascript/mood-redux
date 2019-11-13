import { getFace } from '../selectors/getFace';

export const SAVE_GAME = 'SAVE_GAME';
export const saveGameAction = state => {
  return ({
    type: SAVE_GAME,
    payload: {
      face: getFace(state),
      coffees: state.game.coffees,
      snacks: state.game.snacks,
      naps: state.game.naps,
      studies: state.game.studies,
    }
  });
};
