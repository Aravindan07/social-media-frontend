import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	fetchPostsApi,
	addCommentToPostApi,
	likePostApi,
	dislikePostApi,
	likeCommentApi,
	createPostApi,
} from "./postApi";

export const fetchPosts = createAsyncThunk("posts/fetch", async (userId) => {
	try {
		const response = await fetchPostsApi(userId);
		return response.data;
	} catch (error) {
		console.error(error);
	}
});

export const addPost = createAsyncThunk(
	"posts/add",
	async ({ userId, post }, { rejectWithValue }) => {
		try {
			const response = await createPostApi(userId, post);
			return response.data;
		} catch (error) {
			console.error(error);
			return rejectWithValue(error.response.data);
		}
	}
);

export const addCommentToPost = createAsyncThunk(
	"posts/add",
	async ({ postUserId, postId, commentedUserId, comment }, { rejectWithValue }) => {
		try {
			const response = await addCommentToPostApi(
				postUserId,
				postId,
				commentedUserId,
				comment
			);
			return response.data;
		} catch (error) {
			console.error(error);
			return rejectWithValue(error.response.data);
		}
	}
);

export const likePost = createAsyncThunk(
	"posts/like",
	async ({ userPostId, likedUserId, postId }, { rejectWithValue }) => {
		try {
			const response = await likePostApi(userPostId, likedUserId, postId);
			return response.data;
		} catch (error) {
			console.error(error);
			return rejectWithValue(error.response.data);
		}
	}
);

export const dislikePost = createAsyncThunk(
	"posts/dislike",
	async ({ userPostId, likedUserId, postId }, { rejectWithValue }) => {
		try {
			const response = await dislikePostApi(userPostId, likedUserId, postId);
			return response.data;
		} catch (error) {
			console.error(error);
			return rejectWithValue(error.response.data);
		}
	}
);

export const likeComment = createAsyncThunk(
	"posts/likeComment",
	async ({ userPostId, likedUserId, postId, commentId }, { rejectWithValue }) => {
		try {
			const response = await likeCommentApi(userPostId, likedUserId, postId, commentId);

			return response.data;
		} catch (error) {
			console.error(error);
			return rejectWithValue(error.response.data);
		}
	}
);

const initialState = {
	status: "idle",
	posts: null,
	message: null,
};

const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPosts.pending]: (state) => {
			state.status = "loading";
		},
		[fetchPosts.fulfilled]: (state, action) => {
			state.status = "success";
			// state.posts = action.payload.posts.following || action.payload.posts;
			state.posts = action.payload.posts;
			state.message = action.payload.message;
		},
		[fetchPosts.rejected]: (state, action) => {
			state.status = "error";
			state.message = action.payload.message;
		},
		[addPost.pending]: (state) => {
			state.status = "loading";
		},
		[addPost.fulfilled]: (state, action) => {
			const foundPost = state.posts.findIndex((el) => el._id === action.payload.posts._id);

			state.posts[foundPost] = action.payload.posts;
			state.status = "success";
			// state.user.posts = action.payload.item;
			state.message = action.payload.message;
		},
		[addPost.rejected]: (state, action) => {
			state.status = "error";
			state.message = action.payload.message;
		},
		[addCommentToPost.pending]: (state) => {
			state.status = "loading";
		},
		[addCommentToPost.fulfilled]: (state, action) => {
			const foundPost = state.posts.findIndex((el) => el._id === action.payload.posts._id);
			state.posts[foundPost] = action.payload.posts;
			state.status = "success";
			state.message = action.payload.message;
		},
		[addCommentToPost.rejected]: (state, action) => {
			state.status = "error";
			state.message = action.payload.message;
		},
		[likePost.pending]: (state) => {
			state.status = "loading";
		},
		[likePost.fulfilled]: (state, action) => {
			const foundPost = state.posts.findIndex((el) => el._id === action.payload.posts._id);
			// const foundPost = state.posts.findIndex(
			// 	(el) => el.posts?._id === action.payload.posts._id
			// );
			state.posts[foundPost] = action.payload.posts;
			state.message = action.payload.message;
		},
		[likePost.rejected]: (state, action) => {
			state.status = "error";
			state.message = action.payload.message;
		},
		[dislikePost.pending]: (state) => {
			state.status = "loading";
		},
		[dislikePost.fulfilled]: (state, action) => {
			const foundPost = state.posts.findIndex((el) => el._id === action.payload.posts._id);
			// const foundPost = state.posts.findIndex(
			// 	(el) => el.posts?._id === action.payload.posts._id
			// );
			state.posts[foundPost] = action.payload.posts;
			state.message = action.payload.message;
		},
		[dislikePost.rejected]: (state, action) => {
			state.status = "error";
			state.message = action.payload.message;
		},
		[likeComment.pending]: (state) => {
			state.status = "loading";
		},
		[likeComment.fulfilled]: (state, action) => {
			const foundPost = state.posts.findIndex((el) => el._id === action.payload.posts._id);
			state.posts[foundPost] = action.payload.posts;
			state.message = action.payload.message;
		},
		[likeComment.rejected]: (state, action) => {
			state.status = "error";
			state.message = action.payload.message;
		},
	},
});

export default postSlice.reducer;
