import { SET_VIEW, DAY_SELECTED } from '../actions';

export default function(state = 'calendar', action) {
  switch (action.type) {
    case DAY_SELECTED:
      return action.payload.view;

    case SET_VIEW:
      return action.payload;

    default:
      return state;
  }
}
