export const isTired = state => state.game.coffees < 1 && state.game.naps < 1;
export const isHyper = state => state.game.coffees > 3;
export const isEducated = state => state.game.studies > 2;
export const isHungry = state => state.game.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '😠';
  if(isHyper(state) && isHungry(state)) return '🙀';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤓';
  if(isHungry(state)) return '😡';

  return '😀';
};
