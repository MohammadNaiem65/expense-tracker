import axiosInstance from '../../utils/axios';

export const readTransactions = async () => {
	const res = await axiosInstance.get('/transactions');

	return res.data;
};

export const postTransaction = async (data) => {
	const response = await axiosInstance.post('/transactions', data);

	return response.data;
};
