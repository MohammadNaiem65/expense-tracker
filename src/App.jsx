import './App.css';
import AllTransactions from './components/AllTransactions/AllTransactions';
import TransactionForm from './components/TransactionForm/TransactionForm';

function App() {
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

					<TransactionForm />

					<p className='second_heading'>Your Transactions:</p>

					<AllTransactions />
				</div>
			</div>

			{/* Footer */}
			<div className='footer'>&copy;2022 Learn with Sumit</div>
		</div>
	);
}

export default App;
