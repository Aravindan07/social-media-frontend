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

export const fetchIndividualPostApi = (userId, postId) => {
	return axios.get(`${REACT_APP_BACKEND_URL}/users/${userId}/${postId}/get-post`, TokenConfig());
};
