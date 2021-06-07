import { VStack } from "@chakra-ui/layout";
import React from "react";
import { Navbar, Sidebar } from "./components";
import AppRoutes from "./routes";

function App() {
	return (
		<>
			<Navbar />
			<Sidebar />
			{/* <VStack w="100%" height="100%" mt="200px">
				<h2>Hello World</h2>
			</VStack> */}
			<AppRoutes />
		</>
	);
}

export default App;
