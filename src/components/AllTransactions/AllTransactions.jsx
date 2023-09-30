import editImg from '../../assets/edit.svg';
import deleteImg from '../../assets/delete.svg';

export default function AllTransactions() {
	return (
		<div className='conatiner_of_list_of_transactions'>
			<ul>
				<li className='transaction income'>
					<p>Earned this month</p>
					<div className='right'>
						<p>৳ 100</p>
						<button className='link'>
							<img className='icon' src={editImg} />
						</button>
						<button className='link'>
							<img className='icon' src={deleteImg} />
						</button>
					</div>
				</li>
			</ul>
		</div>
	);
}
