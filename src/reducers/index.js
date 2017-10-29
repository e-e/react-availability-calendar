import { combineReducers } from 'redux';
import EventsReducer from './EventsReducer';
import DateReducer from './DateReducer';
import CalendarReducer from './CalendarReducer';

const rootReducer = combineReducers({
  events: EventsReducer,
  date: DateReducer,
  calendar: CalendarReducer
});

export default rootReducer;
