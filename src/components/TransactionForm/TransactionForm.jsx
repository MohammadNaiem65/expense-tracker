import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addTransaction,
	modifyTransaction,
	setEditModeDetails,
} from '../../features/transactions/transactionsSlice';

export default function TransactionForm({ editMode, setEditMode }) {
	// ! Required hooks and variables
	const { editTransactionDetails } = useSelector(
		(state) => state.transactions
	);
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [amount, setAmount] = useState('');

	const reset = () => {
		setName('');
		setType('');
		setAmount('');
	};

	const handlePostTransaction = (e) => {
		e.preventDefault();

		const data = {
			name,
			type,
			amount,
		};

		dispatch(addTransaction(data));
		reset();
	};

	const handleEditTransaction = (e) => {
		e.preventDefault();

		const data = {
			name,
			type,
			amount,
		};

		dispatch(modifyTransaction({ id: editTransactionDetails.id, data }));

		dispatch(setEditModeDetails({}));
		setEditMode(false);
		reset();
	};

	const handleCancelEditTransaction = () => {
		setEditMode(false);
		dispatch(setEditModeDetails({}));
	};

	// update data to edit transaction
	useEffect(() => {
		if (editTransactionDetails.id) {
			setName(editTransactionDetails.name);
			setType(editTransactionDetails.type);
			setAmount(editTransactionDetails.amount);
		} else {
			setName('');
			setType('');
			setAmount('');
		}
	}, [editTransactionDetails]);

	return (
		<form
			className='form'
			onSubmit={editMode ? handleEditTransaction : handlePostTransaction}>
			<h3 className='text-center'>
				{editMode ? 'Edit Transaction' : 'Add new Transaction'}
			</h3>

			<div className='form-group'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					placeholder='My Salary'
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
					className='px-3 py-1'
				/>
			</div>

			<div className='form-group radio'>
				<label htmlFor='type'>Type</label>
				<div className='radio_group'>
					<input
						type='radio'
						value='income'
						name='type'
						required
						checked={type === 'income'}
						onChange={() => setType('income')}
						className='ml-3'
					/>
					<label htmlFor='type'>Income</label>
				</div>
				<div className='radio_group'>
					<input
						type='radio'
						value='expense'
						name='type'
						placeholder='Expense'
						checked={type === 'expense'}
						onChange={() => setType('expense')}
					/>
					<label htmlFor='transaction_type'>Expense</label>
				</div>
			</div>

			<div className='form-group'>
				<label htmlFor='amount'>Amount</label>
				<input
					type='number'
					placeholder='00'
					name='amount'
					required
					value={amount}
					onChange={(e) => setAmount(parseInt(e.target.value))}
					className='px-3 py-1'
				/>
			</div>

			<button type='submit' className='btn bg-[#4338ca]'>
				{editMode ? 'Edit Transaction' : 'Add Transaction'}
			</button>

			{editMode && (
				<button
					className='btn cancel_edit'
					onClick={handleCancelEditTransaction}>
					Cancel Edit
				</button>
			)}
		</form>
	);
}
