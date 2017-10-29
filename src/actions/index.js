export const SET_YEAR = 'SET_YEAR';
export const SET_MONTH = 'SET_MONTH';
export const SET_DAY = 'SET_DAY';

export function setYear(data) {
  return {
    type: SET_YEAR,
    payload: data
  };
}

export function setMonth(data) {
  return {
    type: SET_MONTH,
    payload: data
  };
}

export function setDay(data) {
  return {
    type: SET_DAY,
    payload: data
  };
}
