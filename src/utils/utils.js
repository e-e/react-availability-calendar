import { DAYS_OF_WEEK } from './constants';

export function daysInMonth(year, month, zeroIndexed = true) {
  // need month to not be zero indexed for this function to work
  // month = zeroIndexed ? month + 1 : month;
  // return new Date(year, month, 0).getDate();
  return 32 - new Date(year, month, 32).getDate();
}

// check if a given date is a given day of the week
export function dateIsDayOfWeek(
  year,
  month,
  date,
  dayOfWeek,
  zeroIndexed = true
) {
  // different behavior here is needed than in #daysInMonth. here, we need the
  // month to be zero-indexed
  month = zeroIndexed ? month : month - 1;
  let d = new Date(year, month, date);
  let index = d.getDay();
  return dayOfWeek === DAYS_OF_WEEK[index];
}

export function mapDays(days) {
  let obj = {};
  DAYS_OF_WEEK.forEach(day => (obj[day] = []));
  return DAYS_OF_WEEK.reduce((result, day) => {
    result[day] = [];
    return result;
  }, {});
}

export function binDates(year, month, zeroIndexed = true) {
  month = zeroIndexed ? month : month - 1;
  let date = new Date(year, month, 0);
  let bins = mapDays(DAYS_OF_WEEK);
  let numDays = daysInMonth(year, month);
  let firstDayIndex = 0;
  let lastDayIndex = 0;

  for (let i = 1; i <= numDays; i++) {
    let dow = DAYS_OF_WEEK[new Date(year, month, i).getDay()];
    if (i === 1) firstDayIndex = DAYS_OF_WEEK.indexOf(dow);
    else if (i === numDays) lastDayIndex = DAYS_OF_WEEK.indexOf(dow);
    bins[dow].push(i);
  }

  let numWeeks = Object.keys(bins).reduce((max, bin) => {
    if (bins[bin].length > max) max = bins[bin].length;
    return max;
  }, 0);

  Object.keys(bins).forEach(bin => {
    let dowIndex = DAYS_OF_WEEK.indexOf(bin);
    if (dowIndex < firstDayIndex) {
      bins[bin].unshift(0);
    }
    if (dowIndex > lastDayIndex) {
      bins[bin].push(0);
    }
  });

  return bins;
}
