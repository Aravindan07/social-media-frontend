import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	user: null,
};

export const loginSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			console.log(action);
			state.isAuthenticated = true;
			state.user = action.payload.user;
		},
		register: (state, action) => {
			state.isAuthenticated = true;
			state.user = action.payload.user;
		},
		loadUser: (state, action) => {
			state.isAuthenticated = true;
			state.user = action.payload.user;
		},
		logout: (state, action) => {
			state.isAuthenticated = false;
			state.user = null;
		},
	},
});

export const { login, register, loadUser, logout } = loginSlice.actions;

export default loginSlice.reducer;
