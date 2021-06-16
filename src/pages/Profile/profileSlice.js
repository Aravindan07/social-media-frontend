import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { followUserApi, unFollowUserApi } from "../Explore/exploreApi";
import { editProfileApi, fetchProfileApi, fetchFollowingAndFollowersApi } from "./profileApi";

export const fetchProfile = createAsyncThunk(
	"fetch/profile",
	async (userName, { rejectWithValue }) => {
		try {
			const response = await fetchProfileApi(userName);

			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const editProfile = createAsyncThunk(
	"edit/profile",
	async ({ userId, name, bio, location, website }, { rejectWithValue }) => {
		try {
			const response = await editProfileApi(userId, name, bio, location, website);

			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

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

export const followUser = createAsyncThunk(
	"fetch/follow",
	async ({ userId, followingId }, { rejectWithValue }) => {
		try {
			const response = await followUserApi(userId, followingId);

			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const unFollowUser = createAsyncThunk(
	"fetch/unfollow",
	async ({ userId, followingId }, { rejectWithValue }) => {
		try {
			const response = await unFollowUserApi(userId, followingId);

			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const initialState = {
	status: "idle",
	profile: null,
	message: null,
	following: null,
	followers: null,
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchProfile.pending]: (state) => {
			state.status = "loading";
		},
		[fetchProfile.fulfilled]: (state, action) => {
			state.status = "success";
			state.profile = action.payload.profile;
			state.message = action.payload.message;
		},
		[fetchProfile.rejected]: (state, action) => {
			state.status = "error";
			state.message = action.payload?.message || action.error.message;
		},
		[fetchFollowingAndFollowers.pending]: (state) => {
			state.status = "loading";
		},
		[fetchFollowingAndFollowers.fulfilled]: (state, action) => {
			state.status = "success";
			state.following = action.payload.following;
			state.followers = action.payload.followers;
			// state.message = action.payload.message;
		},
		[fetchFollowingAndFollowers.rejected]: (state, action) => {
			state.status = "error";
			state.message = action.payload?.message || action.error.message;
		},
		[editProfile.pending]: (state) => {
			state.status = "loading";
		},
		[editProfile.fulfilled]: (state, action) => {
			state.status = "success";
			state.profile = action.payload.user;
			state.message = action.payload.message;
		},
		[editProfile.rejected]: (state, action) => {
			state.status = "error";
			state.message = action.payload.message || action.error.message;
		},
		[followUser.pending]: (state) => {
			state.status = "loading";
		},
		[followUser.fulfilled]: (state, action) => {
			state.status = "success";
			state.following = action.payload.following.following;
		},
		[followUser.rejected]: (state, action) => {
			state.status = "error";
		},
		[unFollowUser.pending]: (state) => {
			state.status = "loading";
		},
		[unFollowUser.fulfilled]: (state, action) => {
			state.status = "success";
			state.following = action.payload.following.following;
		},
		[unFollowUser.rejected]: (state, action) => {
			state.status = "error";
		},
	},
});

export default profileSlice.reducer;
