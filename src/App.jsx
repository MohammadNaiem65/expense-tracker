import { useState } from 'react';
import './App.css';
import AllTransactions from './components/AllTransactions/AllTransactions';
import TransactionForm from './components/TransactionForm/TransactionForm';

function App() {
	// ! Required hooks and variables
	const [editMode, setEditMode] = useState(false);
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
							<span>৳</span>
							<span>10500</span>
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
