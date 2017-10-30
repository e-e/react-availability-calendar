import { SET_VIEW } from '../actions';

export default function(state = 'calendar', action) {
  switch (action.type) {
    case SET_VIEW:
      return action.payload;

    default:
      return state;
  }
}
