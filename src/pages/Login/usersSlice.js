import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserApi, registerUserApi, loadUserApi } from "./usersApi";

export const loginUser = createAsyncThunk(
	"users/login",
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const response = await loginUserApi(email, password);
			console.log(response.data);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const registerUser = createAsyncThunk(
	"users/register",
	async ({ name, userName, email, password }, { rejectWithValue }) => {
		try {
			const response = await registerUserApi(name, userName, email, password);
			console.log(response.data);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const loadUser = createAsyncThunk("users/loadUser", async (_, { rejectWithValue }) => {
	console.log("Inside load user");
	try {
		const response = await loadUserApi();
		console.log(response.data);
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

const initialState = {
	status: "idle",
	isAuthenticated: false,
	user: null,
	message: null,
};

export const usersSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logout: (state) => {
			console.log("Inside logout", state.isAuthenticated);
			localStorage.removeItem("userAuthenticated");
			state.status = "idle";
			state.isAuthenticated = !state.isAuthenticated;
			state.user = null;
		},
	},
	extraReducers: {
		[loginUser.pending]: (state) => {
			state.status = "loading";
		},
		[loginUser.fulfilled]: (state, action) => {
			localStorage.setItem("token", action.payload.token);
			localStorage.setItem("userAuthenticated", true);
			state.status = "success";
			state.isAuthenticated = true;
			state.user = action.payload.user;
			state.message = action.payload.message;
		},
		[loginUser.rejected]: (state, action) => {
			console.log("Action", action);
			state.status = "error";
			state.message = action.payload.message;
		},
		[registerUser.pending]: (state) => {
			state.status = "loading";
		},
		[registerUser.fulfilled]: (state, action) => {
			localStorage.setItem("token", action.payload.token);
			localStorage.setItem("userAuthenticated", true);
			state.status = "success";
			state.isAuthenticated = true;
			state.user = action.payload.user;
			state.message = action.payload.message;
		},
		[registerUser.rejected]: (state, action) => {
			console.log("Action", action);
			state.status = "error";
			state.message = action.payload.message;
		},
		[loadUser.pending]: (state) => {
			state.status = "loading";
		},
		[loadUser.fulfilled]: (state, action) => {
			state.status = "success";
			state.isAuthenticated = true;
			state.user = action.payload.user;
			state.message = action.payload.message;
		},
		[loadUser.rejected]: (state, action) => {
			console.log("Action", action);
			state.status = "error";
			state.message = action.payload.message;
		},
	},
});

export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
