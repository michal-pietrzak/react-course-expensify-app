import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = expense => ({
	type: 'ADD_EXPENSE',
	expense
});

export const startAddExpense = (expenseData = {}) => {
	return (dispatch) => {
		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0
		} = expenseData;
		const expense = { description, note, amount, createdAt };

		return database
			.ref('expenses')
			.push(expense)
			.then(ref => {
				dispatch(addExpense({ id: ref.key, ...expense })); 
			});
	};
};

// REMOVE_EXPENSE
// from the store...
export const removeExpense = ({ id } = {}) => ({ 
	type: 'REMOVE_EXPENSE',
	id 
});
// ...and from Firebase
export const startRemoveExpense = ({ id } = {}) => {
	return dispatch => {
		return database
			.ref(`expenses/${id}`)
			.remove()
			.then(() => { dispatch(removeExpense({ id })); })
			.catch(error => {	console.error('error:', error); });
	};
};

// EDIT_EXPENSE
// in the store...
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});
// ...and in Firebase
export const startEditExpense = (id, updates) => {
	return (dispatch) => {
		return database
			.ref(`expenses/${id}`)
			.update(updates)
			.then(() => {dispatch(editExpense(id, updates))})
			.catch(error => { console.error('error: ', error)});
	};
};

// SET_EXPENSES
export const setExpenses = expenses => ({
	type: 'SET_EXPENSES',
	expenses
});

export const startSetExpenses = () => {
	return (dispatch) => {
		return database
			.ref('expenses')
			.once('value')
			.then(snapshot => {
				const expenses = [];
				snapshot.forEach(childSnapshot => {
					expenses.push({
						id: childSnapshot.key,
						...childSnapshot.val()
					});
				});
				dispatch(setExpenses(expenses));
			});
	};
};
