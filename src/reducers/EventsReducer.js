import { FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST } from '../actions';

function mapKeys(arr, key, excludeVals = []) {
  if (excludeVals && typeof excludeVals !== 'array') {
    excludeVals = [excludeVals];
  }
  return arr.reduce((obj, item) => {
    if (excludeVals.indexOf(item[key]) === -1) {
      obj[item[key]] = item;
    }
    return obj;
  }, {});
}

function omit(data, key) {
  if (data.hasOwnProperty(key)) {
    delete data[key];
  }
  return data;
}

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_POSTS:
      let mapped = mapKeys(action.payload, 'id');
      console.log(mapped);
      return mapped;

    case CREATE_POST:
      console.log('create post action: ', action);
      return state;

    case DELETE_POST:
      console.log('delete action: ', action);
      return omit(state, action.payload);

    default:
      return state;
  }
}
