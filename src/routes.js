import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages";

function AppRoutes() {
	const user = useSelector((state) => state.login);
	// if (!user.isAuthenticated) {
	// 	return <Redirect
	// }
	return (
		<Routes>
			<Route
				path="/"
				element={
					user.isAuthenticated ? (
						<Navigate to="/home" replace={true} />
					) : (
						<Navigate to="/login" replace={true} />
					)
				}
			/>
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	);
}

export default AppRoutes;
