import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../pages/Login/usersSlice";
import postReducer from "../components/Post/postSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		users: usersReducer,
		posts: postReducer,
	},
});
