import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import loginReducer from "../pages/Login/loginSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		login: loginReducer,
	},
});
