import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPostsApi } from "./postApi";

export const fetchPosts = createAsyncThunk("posts/fetch", async (userId) => {
	try {
		const response = await fetchPostsApi(userId);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
});

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
			state.posts = action.payload.posts.following;
			state.message = action.payload.message;
		},
		[fetchPosts.rejected]: (state, action) => {
			console.log("Action", action);
			state.status = "error";
			state.message = action.payload.message;
		},
	},
});

export default postSlice.reducer;
