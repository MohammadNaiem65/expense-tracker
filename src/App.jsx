import { useState } from 'react';
import './App.css';
import AllTransactions from './components/AllTransactions/AllTransactions';
import TransactionForm from './components/TransactionForm/TransactionForm';
import { useSelector } from 'react-redux';

function App() {
	// ! Required hooks and variables
	const { transactions } = useSelector((state) => state.transactions);
	const [editMode, setEditMode] = useState(false);

	const totalTransaction = transactions.reduce((total, curr) => {
		if (curr.type === 'income') {
			return (total += curr.amount);
		} else {
			return (total -= curr.amount);
		}
	}, 0);

	return (
		<div className='App'>
			{/* Header */}
			<div className='header'>
				<h1>Expense Tracker</h1>
			</div>

			{/* Card */}
			<div className='main'>
				<div className='container'>
					<div className='top_card'>
						<p>Your Current Balance</p>
						<h3>
							<span>৳ </span>
							<span>{totalTransaction}</span>
						</h3>
					</div>

					<TransactionForm
						editMode={editMode}
						setEditMode={setEditMode}
					/>

					<p className='second_heading'>Your Transactions:</p>

					<AllTransactions setEditMode={setEditMode} />
				</div>
			</div>

			{/* Footer */}
			<div className='footer'>&copy;2022 Learn with Sumit</div>
		</div>
	);
}

export default App;
