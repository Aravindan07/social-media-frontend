import axios from "axios";

const { REACT_APP_BACKEND_URL } = process.env;

export const TokenConfig = () => {
	//Get token from localStorage
	const token = localStorage.getItem("token");

	//Headers
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};

	//If token add to headers
	if (token) {
		config.headers["Authorization"] = `Bearer ${token}`;
	}

	return config;
};

export const loginUserApi = (email, password) => {
	return axios.post(`${REACT_APP_BACKEND_URL}/users/login`, { email, password });
};

export const registerUserApi = (fullName, userName, email, password) => {
	return axios.post(`${REACT_APP_BACKEND_URL}/users/register`, {
		fullName,
		userName,
		email,
		password,
	});
};

export const loadUserApi = () => {
	return axios.get(`${REACT_APP_BACKEND_URL}/users`, TokenConfig());
};
