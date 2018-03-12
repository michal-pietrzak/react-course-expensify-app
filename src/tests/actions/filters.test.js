import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('should generate the set text filter action object', () => {
  const action = setTextFilter('rent');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  })
});

test('should generate the set text filter action object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});

test('should generate the sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  });
});

test('should generate the sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  });
});

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action= setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});