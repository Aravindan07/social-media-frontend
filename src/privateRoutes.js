import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router";

// const checkAuthenticated = () => {
// 	const userAuthenticated = localStorage.getItem("userAuthenticated");
// 	return userAuthenticated;
// };

export const PrivateRoute = ({ path, ...props }) => {
	const state = useSelector((state) => state.users);
	return state.isAuthenticated ? (
		<Route path={path} {...props} />
	) : (
		<Navigate to="/login" state={{ from: path }} replace />
	);
};
