import { GridItem } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Navbar, Sidebar } from "./components";
import AppRoutes from "./routes";

function App() {
	const location = useLocation();
	// const state = useSelector((state) => state.users);
	// useEffect(() => {
	// 	if (!state.isAuthenticated) <Navigate to="/login" />;
	// }, [state.isAuthenticated]);

	// const userAuthenticated = localStorage.getItem("userAuthenticated");

	return (
		<>
			{location.pathname !== "/login" && location.pathname !== "/register" ? (
				<Grid h="100vh" templateRows="70px auto" templateColumns="200px auto" gap={0}>
					<GridItem rowSpan={2} colSpan={1}>
						<Sidebar />
					</GridItem>
					<GridItem colSpan={1}>
						<Navbar />
					</GridItem>
					<GridItem colSpan={1}>
						<AppRoutes />
					</GridItem>
				</Grid>
			) : (
				<>
					<AppRoutes />
				</>
			)}
		</>
	);
}

export default App;
