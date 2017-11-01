import { SET_YEAR, SET_MONTH, SET_DAY, SET_DATE } from '../actions';

const TODAY = new Date();
const DEFAULT_DATE = {
  year: TODAY.getFullYear(),
  month: TODAY.getMonth()
};
export default function(state = DEFAULT_DATE, action) {
  switch (action.type) {
    case SET_YEAR:
      console.log('DateReducer: SET_YEAR', action);
      return Object.assign({}, state, { year: parseInt(action.payload, 10) });

    case SET_MONTH:
      console.log('DateReducer: SET_MONTH', action);
      let newState = Object.assign({}, state, {
        month: parseInt(action.payload, 10)
      });
      console.log('newState', newState);
      return newState;

    case SET_DATE:
      console.log('DateReducer: SET_DATE', action);
      let _newState = Object.assign({}, state, action.payload);
      console.log('!!!!!!new date: ', _newState);
      return _newState;

    default:
      return state;
  }
}
