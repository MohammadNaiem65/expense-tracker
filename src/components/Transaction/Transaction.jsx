import { useDispatch } from 'react-redux';
import {
	removeTransaction,
	setEditModeDetails,
} from '../../features/transactions/transactionsSlice';
import editImg from '../../assets/edit.svg';
import deleteImg from '../../assets/delete.svg';

export default function Transaction({ details, setEditMode }) {
	// ! Required hooks and variables
	const dispatch = useDispatch();
	const { name, type, amount, id } = details;

	const handleSetEditMode = () => {
		dispatch(setEditModeDetails(details));
		setEditMode(true);
	};

	const handleRemoveTransaction = () => {
		dispatch(removeTransaction(id));
	};

	return (
		<li
			className={`transaction ${
				type === 'income' ? 'income' : 'expense'
			}`}>
			<p>{name}</p>
			<div className='right'>
				<p>৳ {amount}</p>
				<button className='link' onClick={handleSetEditMode}>
					<img className='icon' src={editImg} />
				</button>
				<button className='link' onClick={handleRemoveTransaction}>
					<img className='icon' src={deleteImg} />
				</button>
			</div>
		</li>
	);
}
