export const getActions = state => {
  return state.actions.map(action => {
    return {
      ...action,
      count: state[action.stateName]
    };
  });
};
