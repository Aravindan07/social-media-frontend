import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, HomePage, RegisterPage } from "./pages";
import { PrivateRoute } from "./privateRoutes";

function AppRoutes() {
	const state = useSelector((state) => state.users);

	// const userAuthenticated = localStorage.getItem("userAuthenticated");

	return (
		<Routes>
			<Route
				path="/"
				element={
					state.isAuthenticated ? (
						<Navigate to="/home" replace />
					) : (
						<Navigate to="/login" replace />
					)
				}
			/>
			<PrivateRoute exact path="/home" element={<HomePage />} />
			<Route exact path="/login" element={<LoginPage />} />
			<Route exact path="/register" element={<RegisterPage />} />
			<PrivateRoute exact path="/:userName" element={<h2>Your profile!</h2>} />
		</Routes>
	);
}

export default AppRoutes;
