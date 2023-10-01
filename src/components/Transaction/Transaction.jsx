import editImg from '../../assets/edit.svg';
import deleteImg from '../../assets/delete.svg';

export default function Transaction({ details }) {
	// ! Required hooks and variables
	const { id, name, type, amount } = details;

	return (
		<li
			className={`transaction ${
				type === 'income' ? 'income' : 'expense'
			}`}>
			<p>{name}</p>
			<div className='right'>
				<p>৳ {amount}</p>
				<button className='link'>
					<img className='icon' src={editImg} />
				</button>
				<button className='link'>
					<img className='icon' src={deleteImg} />
				</button>
			</div>
		</li>
	);
}
