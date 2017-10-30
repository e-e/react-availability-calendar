import { SET_EVENTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_EVENTS:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}
