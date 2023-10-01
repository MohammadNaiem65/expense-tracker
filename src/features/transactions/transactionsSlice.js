import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postTransaction, readTransactions } from './transactionsAPI';

// initial state
const initialState = {
	transactions: [],
	isLoading: false,
	isError: false,
	error: '',
};

// async thunks
export const addTransaction = createAsyncThunk(
	'transactions/postTransaction',
	async (data) => {
		const res = await postTransaction(data);

		return res;
	}
);

// create transactions slice
const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
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
	},
});

export default transactionsSlice.reducer;
