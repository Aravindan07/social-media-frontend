import { Navigate, Route } from "react-router";

const checkAuthenticated = () => {
	const userAuthenticated = localStorage.getItem("userAuthenticated");
	return userAuthenticated;
};

export const PrivateRoute = ({ path, ...props }) => {
	return checkAuthenticated() ? (
		<Route path={path} {...props} />
	) : (
		<Navigate to="/login" state={{ from: path }} replace />
	);
};
