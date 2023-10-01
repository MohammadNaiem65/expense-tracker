import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../features/transactions/transactionsSlice';

export default function TransactionForm() {
	// ! Required hooks and variables
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [amount, setAmount] = useState('');

	const handlePostTransaction = (e) => {
		e.preventDefault();

		const data = {
			name,
			type,
			amount,
		};

		dispatch(addTransaction(data));
	};

	return (
		<form className='form' onSubmit={handlePostTransaction}>
			<h3>Add new transaction</h3>

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
				Add Transaction
			</button>

			<button type='submit' className='btn cancel_edit'>
				Cancel Edit
			</button>
		</form>
	);
}
