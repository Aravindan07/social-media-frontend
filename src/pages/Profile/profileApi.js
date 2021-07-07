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

export const fetchProfileApi = (userName) => {
	return axios.get(`${REACT_APP_BACKEND_URL}/users/${userName}/profile`, TokenConfig());
};

export const editProfileApi = (userId, name, bio, location, website) => {
	return axios.put(
		`${REACT_APP_BACKEND_URL}/users/${userId}/edit-profile`,
		{
			userId,
			name,
			bio,
			location,
			website,
		},
		TokenConfig()
	);
};

export const fetchFollowingAndFollowersApi = (userId) => {
	return axios.get(
		`${REACT_APP_BACKEND_URL}/users/${userId}/fetch-followers-and-following`,
		TokenConfig()
	);
};
