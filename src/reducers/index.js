import { combineReducers } from 'redux';
import EventsReducer from './EventsReducer';
import DateReducer from './DateReducer';
import CalendarReducer from './CalendarReducer';
import ViewReducer from './ViewReducer';

const rootReducer = combineReducers({
  events: EventsReducer,
  date: DateReducer,
  calendar: CalendarReducer,
  view: ViewReducer
});

export default rootReducer;
