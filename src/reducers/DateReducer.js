import { SET_YEAR, SET_MONTH, SET_DAY } from '../actions';

const TODAY = new Date();
const DEFAULT_DATE = {
  year: TODAY.getFullYear(),
  month: TODAY.getMonth(),
  day: TODAY.getDate()
};
export default function(state = DEFAULT_DATE, action) {
  switch (action.type) {
    case SET_YEAR:
      return Object.assign({}, state, { year: action.payload });

    case SET_MONTH:
      return Object.assign({}, state, { month: action.payload });

    case SET_DAY:
      return Object.assign({}, state, { day: action.payload });

    default:
      return state;
  }
}
