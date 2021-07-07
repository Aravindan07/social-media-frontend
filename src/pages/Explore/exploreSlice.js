import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFollowingAndFollowersApi } from "../Profile/profileApi";
import { fetchUsersApi } from "./exploreApi";

export const fetchAllUsers = createAsyncThunk("fetch/all", async (_, { rejectWithValue }) => {
	try {
		const response = await fetchUsersApi();
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

// export const followUser = createAsyncThunk(
// 	"fetch/follow",
// 	async ({ userId, followingId }, { rejectWithValue }) => {
// 		console.log("Inside follow user api");
// 		try {
// 			const response = await followUserApi(userId, followingId);
// 			console.log(response.data);
// 			return response.data;
// 		} catch (error) {
// 			return rejectWithValue(error.response.data);
// 		}
// 	}
// );

// export const unFollowUser = createAsyncThunk(
// 	"fetch/unfollow",
// 	async ({ userId, followingId }, { rejectWithValue }) => {
// 		console.log("Inside unfollow user api");
// 		try {
// 			const response = await unFollowUserApi(userId, followingId);
// 			console.log(response.data);
// 			return response.data;
// 		} catch (error) {
// 			return rejectWithValue(error.response.data);
// 		}
// 	}
// );

export const fetchFollowingAndFollowers = createAsyncThunk(
	"fetch/profile-followers-following",
	async (userId, { rejectWithValue }) => {
		try {
			const response = await fetchFollowingAndFollowersApi(userId);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const initialState = {
	status: "idle",
	users: null,
	followingUsers: null,
};

const explorePageSlice = createSlice({
	name: "allUsers",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAllUsers.pending]: (state) => {
			state.status = "loading";
		},
		[fetchAllUsers.fulfilled]: (state, action) => {
			state.status = "success";
			state.users = action.payload.users;
		},
		[fetchAllUsers.rejected]: (state, action) => {
			state.status = "error";
		},
		// [followUser.pending]: (state) => {
		// 	state.status = "loading";
		// },
		// [followUser.fulfilled]: (state, action) => {
		// 	state.status = "success";
		// 	state.followingUsers = action.payload.following.following;
		// },
		// [followUser.rejected]: (state, action) => {
		// 	console.log("Action", action);
		// 	state.status = "error";
		// },
		// [unFollowUser.pending]: (state) => {
		// 	state.status = "loading";
		// },
		// [unFollowUser.fulfilled]: (state, action) => {
		// 	state.status = "success";
		// 	state.followingUsers = action.payload.following.following;
		// },
		// [unFollowUser.rejected]: (state, action) => {
		// 	console.log("Action", action);
		// 	state.status = "error";
		// },
	},
});

export default explorePageSlice.reducer;
