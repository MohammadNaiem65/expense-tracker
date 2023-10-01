import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	postTransaction,
	readTransactions,
	updateTransaction,
} from './transactionsAPI';

// initial state
const initialState = {
	transactions: [],
	isLoading: false,
	isError: false,
	error: '',
	editTransactionDetails: {},
};

// async thunks
export const getTransactions = createAsyncThunk(
	'transactions/getTransactions',
	async () => {
		const transactions = await readTransactions();

		return transactions;
	}
);

export const addTransaction = createAsyncThunk(
	'transactions/postTransaction',
	async (data) => {
		const res = await postTransaction(data);

		return res;
	}
);

export const modifyTransaction = createAsyncThunk(
	'transactions/modifyTransaction',
	async ({ id, data }) => {
		const modifiedData = await updateTransaction(id, data);

		return modifiedData;
	}
);

// create transactions slice
const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {
		setEditModeDetails: (state, action) => {
			state.editTransactionDetails = action.payload;
		},
	},
	extraReducers: (builder) => {
		// add transaction
		builder
			.addCase(addTransaction.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(addTransaction.fulfilled, (state, action) => {
				state.isLoading = false;
				state.transactions.push(action.payload);
			})
			.addCase(addTransaction.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error.message;
			});

		// get transactions
		builder
			.addCase(getTransactions.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(getTransactions.fulfilled, (state, action) => {
				state.isLoading = false;
				state.transactions = action.payload;
			})
			.addCase(getTransactions.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error.message;
			});

		// modify transaction
		builder
			.addCase(modifyTransaction.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(modifyTransaction.fulfilled, (state, action) => {
				state.isLoading = false;

				const index = state.transactions.findIndex(
					(t) => t.id === action.payload.id
				);

				state.transactions[index] = action.payload;
			})
			.addCase(modifyTransaction.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error.message;
			});
	},
});

export default transactionsSlice.reducer;
export const { setEditModeDetails } = transactionsSlice.actions;
