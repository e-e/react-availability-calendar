import { combineReducers } from 'redux';
import EventsReducer from './EventsReducer';
import DateReducer from './DateReducer';
const rootReducer = combineReducers({
  events: EventsReducer,
  date: DateReducer
});

export default rootReducer;
