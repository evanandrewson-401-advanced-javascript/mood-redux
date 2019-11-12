import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import PropTypes from 'prop-types';
import Timer from '../components/timer/timer';
import StartButton from '../components/startButton/StartButton';
import { handleSelectionAction } from '../actions/handleSelectionAction';
import { toggleStartAction } from '../actions/toggleStartAction';
import { decrementCounterAction } from '../actions/decrementCounterAction';
import { restartStateAction } from '../actions/restartStateAction';
import { getCoffees, getSnacks, getNaps, getStudies } from '../selectors/buttonStateSelectors';
import { getTimerCount } from '../selectors/getTimerCount';
import { getHasStarted } from '../selectors/getHasStarted';
import { getFace } from '../selectors/getFace';
import { getActions } from '../selectors/getActions';

const Moods = ({ actions, face, handleSelection, timerCount, hasStarted, toggleStart, decrementCounter, restartState }) => {
  return (
    <>
      {!hasStarted && <StartButton toggleStart={toggleStart} />}
      {hasStarted && <>
        <Controls actions={actions} handleSelection={handleSelection} />
        <Face emoji={face} />
        <Timer timerCount={timerCount} decrementCounter={decrementCounter} restartState={restartState} />
      </>}
    </>
  );
};

Moods.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    stateName: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  })).isRequired,
  face: PropTypes.string.isRequired,
  handleSelection: PropTypes.func.isRequired,
  timerCount: PropTypes.number.isRequired,
  hasStarted: PropTypes.bool.isRequired,
  toggleStart: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  restartState: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  actions: getActions(state),
  face: getFace(state),
  coffees: getCoffees(state),
  snacks: getSnacks(state),
  naps: getNaps(state),
  studies: getStudies(state),
  timerCount: getTimerCount(state),
  hasStarted: getHasStarted(state)
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch(handleSelectionAction(name));
  },
  toggleStart() {
    dispatch(toggleStartAction());
  },
  decrementCounter() {
    dispatch(decrementCounterAction());
  },
  restartState() {
    dispatch(restartStateAction());
  }
});

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;

// const actions = [
//   { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
//   { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
//   { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
//   { name: 'STUDY', text: 'Study', stateName: 'studies' },
// ];

// export const isTired = state => state.coffees < 1 && state.naps < 1;
// export const isHyper = state => state.coffees > 3;
// export const isEducated = state => state.studies > 2;
// export const isHungry = state => state.snacks < 1;

// export const getFace = state => {
//   if(isTired(state) && isHungry(state)) return '🤬';
//   if(isHyper(state) && isHungry(state)) return '🤮';
//   if(isTired(state)) return '😴';
//   if(isHyper(state)) return '🙀';
//   if(isEducated(state)) return '🤯';
//   if(isHungry(state)) return '😡';

//   return '😀';
// };

// export default class Moods extends Component {
//   state = {
//     coffees: 0,
//     snacks: 0,
//     naps: 0,
//     studies: 0
//   }

//   handleSelection = name => {
//     switch(name) {
//       case 'DRINK_COFFEE':
//         this.setState(state => ({ coffees: state.coffees + 1 }));
//         break;
//       case 'EAT_SNACK':
//         this.setState(state => ({ snacks: state.snacks + 1 }));
//         break;
//       case 'TAKE_NAP':
//         this.setState(state => ({ naps: state.naps + 1 }));
//         break;
//       case 'STUDY':
//         this.setState(state => ({ studies: state.studies + 1 }));
//         break;
//       default:
//         console.log(`unhandled name: ${name}`);
//     }
//   }

//   render() {
//     const face = getFace(this.state);
//     const controlActions = actions.map(action => ({
//       ...action,
//       count: this.state[action.stateName]
//     }));

//     return (
//       <>
//         <Controls actions={controlActions} handleSelection={this.handleSelection}/>
//         <Face emoji={face} />
//       </>
//     );
//   }
// }
