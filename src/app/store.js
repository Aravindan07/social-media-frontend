import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../pages/Login/usersSlice";
import postReducer from "../pages/Home/postSlice";
import profileReducer from "../pages/Profile/profileSlice";
import postPageReducer from "../pages/PostPage/postPageSlice";
import explorePageReducer from "../pages/Explore/exploreSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: usersReducer,
		posts: postReducer,
		userProfile: profileReducer,
		// currentPost: postPageReducer,
		allUsers: explorePageReducer,
	},
});
