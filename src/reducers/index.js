import { combineReducers } from 'redux';
import EventsReducer from './EventsReducer';
import DateReducer from './DateReducer';
import CalendarReducer from './CalendarReducer';
import ViewReducer from './ViewReducer';
import CurrentDateReducer from './CurrentDateReducer';

const rootReducer = combineReducers({
  events: EventsReducer,
  date: DateReducer,
  calendar: CalendarReducer,
  currentDate: CurrentDateReducer,
  view: ViewReducer
});

export default rootReducer;
