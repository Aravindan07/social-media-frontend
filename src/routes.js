import { Routes, Route, Navigate } from "react-router-dom";
import {
	LoginPage,
	HomePage,
	RegisterPage,
	ProfilePage,
	FollowersPage,
	ExplorePage,
	NotificationsPage,
	PostPage,
} from "./pages";
import { PrivateRoute } from "./privateRoutes";

function AppRoutes() {
	const userAuthenticated = localStorage.getItem("userAuthenticated");

	return (
		<Routes>
			<Route
				path="/"
				element={
					userAuthenticated ? (
						<Navigate to="/home" replace />
					) : (
						<Navigate to="/login" replace />
					)
				}
			/>
			<Route exact path="/login" element={<LoginPage />} />
			<Route exact path="/register" element={<RegisterPage />} />
			<PrivateRoute exact path="/home" element={<HomePage />} />
			<PrivateRoute exact path="/explore" element={<ExplorePage />} />
			<PrivateRoute exact path="/notifications" element={<NotificationsPage />} />
			<PrivateRoute exact path="/:userName" element={<ProfilePage />} />
			<PrivateRoute exact path="/:userName/followers" element={<FollowersPage />} />
			<PrivateRoute exact path="/:userName/following" element={<FollowersPage />} />
			<PrivateRoute exact path="/:userName/post/:postId" element={<PostPage />} />
		</Routes>
	);
}

export default AppRoutes;
