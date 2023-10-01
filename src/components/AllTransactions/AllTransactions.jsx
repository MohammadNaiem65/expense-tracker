import { useDispatch, useSelector } from 'react-redux';
import Transaction from '../Transaction/Transaction';
import { useEffect } from 'react';
import { getTransactions } from '../../features/transactions/transactionsSlice';

export default function AllTransactions({ setEditMode }) {
	// ! Required hooks and variables
	const dispatch = useDispatch();
	const { transactions, isLoading, isError, error } = useSelector(
		(state) => state.transactions
	);

	// get all transactions
	useEffect(() => {
		dispatch(getTransactions());
	}, [dispatch]);

	// ! decide what to render
	let content = null;
	if (isLoading) {
		content = (
			<h3 className='text-xl text-gray-500 font-bold'>Loading...</h3>
		);
	} else if (!isLoading && isError) {
		content = <h3 className='text-xl text-red-400 font-bold'>{error}</h3>;
	} else if (!isLoading && transactions.length === 0) {
		content = (
			<h3 className='text-xl text-gray-500 font-bold'>
				Have no data to display.
			</h3>
		);
	} else if (!isLoading && transactions.length > 0) {
		content = transactions.map((transaction) => (
			<Transaction
				key={transaction.id}
				details={transaction}
				setEditMode={setEditMode}
			/>
		));
	}

	return (
		<div className='conatiner_of_list_of_transactions'>
			<ul>{content}</ul>
		</div>
	);
}
