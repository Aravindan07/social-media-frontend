import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchIndividualPostApi } from "./postPageApi";

export const fetchIndividualPost = createAsyncThunk(
	"fetch/post",
	async ({ userId, postId }, { rejectWithValue }) => {
		try {
			const response = await fetchIndividualPostApi(userId, postId);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const initialState = {
	status: "idle",
	posts: null,
	postedBy: null,
};

const postPageSlice = createSlice({
	name: "rprofile",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchIndividualPost.pending]: (state) => {
			state.status = "loading";
		},
		[fetchIndividualPost.fulfilled]: (state, action) => {
			state.status = "success";
			state.post = action.payload.post;
			state.postedBy = action.payload.user;
		},
		[fetchIndividualPost.rejected]: (state, action) => {
			state.status = "error";
		},
	},
});

export default postPageSlice.reducer;
