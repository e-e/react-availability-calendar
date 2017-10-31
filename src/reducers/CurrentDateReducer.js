import { DAY_SELECTED } from '../actions';

const DEFAULT_CURRENT_DATE = {
  year: null,
  month: null,
  day: null
};

export default function(state = DEFAULT_CURRENT_DATE, action) {
  switch (action.type) {
    case DAY_SELECTED:
      console.log('CurrentDateReducer: SET_YEAR', action);
      return action.payload.date;

    default:
      return state;
  }
}
