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

export const fetchPostsApi = async (userId) => {
	return axios.get(`${REACT_APP_BACKEND_URL}/users/${userId}/get-posts`, TokenConfig());
};

export const createPostApi = (userId, post) => {
	return axios.post(
		`${REACT_APP_BACKEND_URL}/users/${userId}/add-post`,
		{ userId, post },
		TokenConfig()
	);
};

export const addCommentToPostApi = async (postUserId, postId, commentedUserId, comment) => {
	return axios.post(
		`${REACT_APP_BACKEND_URL}/users/${commentedUserId}/${postId}/add-comment`,
		{ postUserId, postId, commentedUserId, comment },
		TokenConfig()
	);
};

export const likePostApi = async (userPostId, likedUserId, postId) => {
	return axios.post(
		`${REACT_APP_BACKEND_URL}/users/${likedUserId}/${postId}/like-post`,
		{ userPostId, likedUserId, postId },
		TokenConfig()
	);
};

export const dislikePostApi = async (userPostId, likedUserId, postId) => {
	return axios.put(
		`${REACT_APP_BACKEND_URL}/users/${likedUserId}/${postId}/dislike-post`,
		{ userPostId, likedUserId, postId },
		TokenConfig()
	);
};

export const likeCommentApi = async (userPostId, likedUserId, postId, commentId) => {
	return axios.post(
		`${REACT_APP_BACKEND_URL}/users/${likedUserId}/${postId}/${commentId}/like-comment`,
		{ userPostId, likedUserId, postId, commentId },
		TokenConfig()
	);
};
