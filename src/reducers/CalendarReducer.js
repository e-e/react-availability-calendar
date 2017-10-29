import { SET_YEAR, SET_MONTH, SET_DATE } from '../actions';
import { mapDays, binDates } from '../utils/utils';

const BINS = mapDays();

export default function(state = BINS, action) {
  switch (action.type) {
    case SET_YEAR:
      console.log('CalendarReducer: SET_YEAR', action);
      return binDates(
        parseInt(action.payload.year, 10),
        parseInt(action.payload.month, 10)
      );

    case SET_MONTH:
      console.log('CalendarReducer: SET_MONTH', action);
      return binDates(
        parseInt(action.payload.year, 10),
        parseInt(action.payload.month, 10)
      );

    case SET_DATE:
      console.log('CalendarReducer: SET_DATE', action);
      let calendar = binDates(
        parseInt(action.payload.year, 10),
        parseInt(action.payload.month, 10)
      );
      console.log('calendar', calendar);
      return calendar;

    default:
      return state;
  }
}
