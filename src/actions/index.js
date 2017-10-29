export const SET_YEAR = 'SET_YEAR';
export const SET_MONTH = 'SET_MONTH';
export const SET_DATE = 'SET_DATE';

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

export function setDate(data) {
  return {
    type: SET_DATE,
    payload: data
  };
}
