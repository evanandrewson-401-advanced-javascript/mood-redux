import { createStore } from 'redux';

const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0,
  timerCount: 30,
  hasStarted: false,
  actions: [
    { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
    { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
    { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
    { name: 'STUDY', text: 'Study', stateName: 'studies' },
  ]
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'DRINK_COFFEE':
      return { ...state, coffees: state.coffees + 1 };
    case 'EAT_SNACK':
      return { ...state, snacks: state.snacks + 1 };
    case 'TAKE_NAP':
      return { ...state, naps: state.naps + 1 };
    case 'STUDY':
      return { ...state, studies: state.studies + 1 };
    case 'DECREMENT_COUNTER':
      return { ...state, timerCount: state.timerCount - 1 };
    case 'TOGGLE_START':
      return { ...state, hasStarted: !state.hasStarted };
    case 'RESTART_STATE':
      return { ...initialState };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
