import axiosInstance from '../../utils/axios';

export const postTransaction = async (data) => {
	const response = await axiosInstance.post('/transactions', data);

	return response.data;
};
