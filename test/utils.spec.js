import { expect } from 'chai';
import {
  binDates,
  mapDays,
  daysInMonth,
  dateIsDayOfWeek
} from '../src/utils/utils';
import { DAYS_OF_WEEK } from '../src/utils/constants';

let emptyMappedDays = {
  Sunday: [],
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: []
};

describe('binDates', () => {
  describe('#daysInMonth', () => {
    it('should return the correct number of days for a given month and year', () => {
      var tests = [
        { month: 1, year: 2017, numDays: 31, zeroIndexed: false },
        { month: 2, year: 2017, numDays: 28, zeroIndexed: false },
        { month: 3, year: 2017, numDays: 31, zeroIndexed: false },
        { month: 4, year: 2017, numDays: 30, zeroIndexed: false },
        { month: 5, year: 2017, numDays: 31, zeroIndexed: false },
        { month: 6, year: 2017, numDays: 30, zeroIndexed: false },
        { month: 7, year: 2017, numDays: 31, zeroIndexed: false },
        { month: 8, year: 2017, numDays: 31, zeroIndexed: false },
        { month: 9, year: 2017, numDays: 30, zeroIndexed: false },
        { month: 10, year: 2017, numDays: 31, zeroIndexed: false },
        { month: 11, year: 2017, numDays: 30, zeroIndexed: false },
        { month: 12, year: 2017, numDays: 31, zeroIndexed: false },
        { month: 9, year: 2017, numDays: 31, zeroIndexed: true }
      ];
      tests.forEach(test => {
        let actual = daysInMonth(test.year, test.month, test.zeroIndexed);
        if (test.zeroIndexed) console.log('actual', actual);
        expect(actual).to.be.a('number');
        expect(actual).to.equal(test.numDays);
      });
    });
  });

  describe('#dateIsDayOfWeek', () => {
    it('should correctly determine if a given date is the expected day of week', () => {
      let tests = [
        { year: 2017, month: 10, date: 22, dayOfWeek: 'Sunday' },
        { year: 2017, month: 9, date: 1, dayOfWeek: 'Friday' },
        { year: 2017, month: 8, date: 16, dayOfWeek: 'Wednesday' },
        { year: 2016, month: 1, date: 5, dayOfWeek: 'Tuesday' }
      ];
      const isZeroIndexed = false;
      tests.forEach(test => {
        let actual = dateIsDayOfWeek(
          test.year,
          test.month,
          test.date,
          test.dayOfWeek,
          isZeroIndexed
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
      // zero-indexed; 10 === november;
      let month = 10;
      let year = 2017;
      let binnedDates = binDates(year, month);

      let expected = emptyMappedDays;
      expected['Sunday'] = [0, 5, 12, 19, 26];
      expected['Monday'] = [0, 6, 13, 20, 27];
      expected['Tuesday'] = [0, 7, 14, 21, 28];
      expected['Wednesday'] = [1, 8, 15, 22, 29];
      expected['Thursday'] = [2, 9, 16, 23, 30];
      expected['Friday'] = [3, 10, 17, 24, 0];
      expected['Saturday'] = [4, 11, 18, 25, 0];

      expect(binnedDates).to.be.an('object');
      expect(binnedDates).to.deep.equal(expected);

      // second test
      month = 1;
      year = 2014;
      binnedDates = binDates(year, month);

      expected = emptyMappedDays;
      expected['Sunday'] = [0, 2, 9, 16, 23];
      expected['Monday'] = [0, 3, 10, 17, 24];
      expected['Tuesday'] = [0, 4, 11, 18, 25];
      expected['Wednesday'] = [0, 5, 12, 19, 26];
      expected['Thursday'] = [0, 6, 13, 20, 27];
      expected['Friday'] = [0, 7, 14, 21, 28];
      expected['Saturday'] = [1, 8, 15, 22, 0];

      expect(binnedDates).to.be.an('object');
      expect(binnedDates).to.deep.equal(expected);
    });
  });
});
