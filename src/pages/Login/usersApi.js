import axios from "axios";

const { REACT_APP_BACKEND_URL } = process.env;

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
