import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../pages/Login/usersSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		users: usersReducer,
	},
});
