export const getActions = state => {
  return state.game.actions.map(action => {
    return {
      ...action,
      count: state.game[action.stateName]
    };
  });
};
