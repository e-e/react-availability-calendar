import { expect } from 'chai';
import {
  binDates,
  mapDays,
  daysInMonth,
  dateIsDayOfWeek
} from '../src/utils/utils';
import {
  DAYS_OF_WEEK,
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER
} from '../src/utils/constants';

let emptyMappedDays = {
  Sunday: [],
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: []
};

describe('utils', () => {
  describe('#daysInMonth', () => {
    it('should return the correct number of days for a given month and year', () => {
      var tests = [
        { month: JANUARY, year: 2017, numDays: 31 },
        { month: FEBRUARY, year: 2017, numDays: 28 },
        { month: MARCH, year: 2017, numDays: 31 },
        { month: APRIL, year: 2017, numDays: 30 },
        { month: MAY, year: 2017, numDays: 31 },
        { month: JUNE, year: 2017, numDays: 30 },
        { month: JULY, year: 2017, numDays: 31 },
        { month: AUGUST, year: 2017, numDays: 31 },
        { month: SEPTEMBER, year: 2017, numDays: 30 },
        { month: OCTOBER, year: 2017, numDays: 31 },
        { month: NOVEMBER, year: 2017, numDays: 30 },
        { month: DECEMBER, year: 2017, numDays: 31 }
      ];
      tests.forEach(test => {
        let actual = daysInMonth(test.year, test.month);
        if (test.zeroIndexed) console.log('actual', actual);
        expect(actual).to.be.a('number');
        expect(actual).to.equal(test.numDays);
      });
    });
  });

  describe('#dateIsDayOfWeek', () => {
    it('should correctly determine if a given date is the expected day of week', () => {
      let tests = [
        { year: 2017, month: OCTOBER, date: 22, dayOfWeek: 'Sunday' },
        { year: 2017, month: SEPTEMBER, date: 1, dayOfWeek: 'Friday' },
        { year: 2017, month: AUGUST, date: 16, dayOfWeek: 'Wednesday' },
        { year: 2016, month: JANUARY, date: 5, dayOfWeek: 'Tuesday' }
      ];
      tests.forEach(test => {
        let actual = dateIsDayOfWeek(
          test.year,
          test.month,
          test.date,
          test.dayOfWeek
        );
        expect(actual).to.be.a('boolean');
        expect(actual).to.be.true;
      });
    });
  });

  describe('#mapDays', () => {
    it('returns the correct mapped weekday bins', () => {
      let mappedDays = mapDays();
      expect(mappedDays).to.be.an('object');
      expect(mappedDays).to.deep.equal(emptyMappedDays);
    });
  });

  describe('#binDates', () => {
    it('should correctly sort month dates to their weekdays in the correct order with spacer days at the beginning and end of month', () => {
      let tests = [
        {
          month: FEBRUARY,
          year: 2014,
          expected: {
            Sunday: [0, 2, 9, 16, 23],
            Monday: [0, 3, 10, 17, 24],
            Tuesday: [0, 4, 11, 18, 25],
            Wednesday: [0, 5, 12, 19, 26],
            Thursday: [0, 6, 13, 20, 27],
            Friday: [0, 7, 14, 21, 28],
            Saturday: [1, 8, 15, 22, 0]
          }
        },
        {
          month: JANUARY,
          year: 2017,
          expected: {
            Sunday: [1, 8, 15, 22, 29],
            Monday: [2, 9, 16, 23, 30],
            Tuesday: [3, 10, 17, 24, 31],
            Wednesday: [4, 11, 18, 25, 0],
            Thursday: [5, 12, 19, 26, 0],
            Friday: [6, 13, 20, 27, 0],
            Saturday: [7, 14, 21, 28, 0]
          }
        },
        {
          month: FEBRUARY,
          year: 2017,
          expected: {
            Sunday: [0, 5, 12, 19, 26],
            Monday: [0, 6, 13, 20, 27],
            Tuesday: [0, 7, 14, 21, 28],
            Wednesday: [1, 8, 15, 22, 0],
            Thursday: [2, 9, 16, 23, 0],
            Friday: [3, 10, 17, 24, 0],
            Saturday: [4, 11, 18, 25, 0]
          }
        },
        {
          month: MARCH,
          year: 2017,
          expected: {
            Sunday: [0, 5, 12, 19, 26],
            Monday: [0, 6, 13, 20, 27],
            Tuesday: [0, 7, 14, 21, 28],
            Wednesday: [1, 8, 15, 22, 29],
            Thursday: [2, 9, 16, 23, 30],
            Friday: [3, 10, 17, 24, 31],
            Saturday: [4, 11, 18, 25, 0]
          }
        },
        {
          month: JULY,
          year: 2017,
          expected: {
            Sunday: [0, 2, 9, 16, 23, 30],
            Monday: [0, 3, 10, 17, 24, 31],
            Tuesday: [0, 4, 11, 18, 25, 0],
            Wednesday: [0, 5, 12, 19, 26, 0],
            Thursday: [0, 6, 13, 20, 27, 0],
            Friday: [0, 7, 14, 21, 28, 0],
            Saturday: [1, 8, 15, 22, 29, 0]
          }
        },
        {
          month: NOVEMBER,
          year: 2017,
          expected: {
            Sunday: [0, 5, 12, 19, 26],
            Monday: [0, 6, 13, 20, 27],
            Tuesday: [0, 7, 14, 21, 28],
            Wednesday: [1, 8, 15, 22, 29],
            Thursday: [2, 9, 16, 23, 30],
            Friday: [3, 10, 17, 24, 0],
            Saturday: [4, 11, 18, 25, 0]
          }
        },
        {
          month: DECEMBER,
          year: 2017,
          expected: {
            Sunday: [0, 3, 10, 17, 24, 31],
            Monday: [0, 4, 11, 18, 25, 0],
            Tuesday: [0, 5, 12, 19, 26, 0],
            Wednesday: [0, 6, 13, 20, 27, 0],
            Thursday: [0, 7, 14, 21, 28, 0],
            Friday: [1, 8, 15, 22, 29, 0],
            Saturday: [2, 9, 16, 23, 30, 0]
          }
        }
      ];

      tests.forEach(test => {
        let actual = binDates(test.year, test.month);
        expect(actual).to.be.an('object');
        expect(actual).to.deep.equal(test.expected);
      });
    });
  });
});
