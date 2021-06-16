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

export const fetchUsersApi = () => {
	return axios.get(`${REACT_APP_BACKEND_URL}/users/retrieve-all`, TokenConfig());
};

export const followUserApi = (userId, followingId) => {
	return axios.post(
		`${REACT_APP_BACKEND_URL}/users/${userId}/add-to-following`,
		{ userId, followingId },
		TokenConfig()
	);
};

export const unFollowUserApi = (userId, followingId) => {
	return axios.put(
		`${REACT_APP_BACKEND_URL}/users/${userId}/remove-from-following`,
		{ userId, followingId },
		TokenConfig()
	);
};
