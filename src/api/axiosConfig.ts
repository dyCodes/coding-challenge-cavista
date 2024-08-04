import axios from 'axios';

const BASE_URL = 'https://raw.githubusercontent.com/Cavista-Tech/frontend-coding-challenge/main';

const httpClient = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// httpClient.interceptors.request.use(
// 	(config) => {
// 		return config;
// 	},
// 	(error) => Promise.reject(error)
// );

// httpClient.interceptors.response.use(
// 	(response) => response,
// 	(error) => Promise.reject(error)
// );

export default httpClient;
