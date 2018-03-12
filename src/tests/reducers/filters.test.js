import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = {
    type: 'SORT_BY_DATE'
  };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set the text filter', () => {
  const text = 'my test text'
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should set the startDate filter', () => {
  const timeStamp = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate: timeStamp
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(timeStamp);
});

test('should set the endDate filter', () => {
  const timeStamp = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate: timeStamp
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(timeStamp);
});