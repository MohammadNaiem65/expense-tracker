import { useDispatch } from 'react-redux';
import { setEditModeDetails } from '../../features/transactions/transactionsSlice';
import editImg from '../../assets/edit.svg';
import deleteImg from '../../assets/delete.svg';

export default function Transaction({ details, setEditMode }) {
	// ! Required hooks and variables
	const dispatch = useDispatch();
	const { name, type, amount } = details;

	const handleSetEditMode = () => {
		dispatch(setEditModeDetails(details));
		setEditMode(true);
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
				<button className='link'>
					<img className='icon' src={deleteImg} />
				</button>
			</div>
		</li>
	);
}
