import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Divider, Heading, HStack, VStack } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../../pages/Login/loginSlice";
import { Link } from "react-router-dom";

function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const user = useSelector((state) => state.login);
	const dispatch = useDispatch();
	console.log({ user });
	return (
		<>
			<VStack
				position="fixed"
				top="0"
				right="0"
				height="70px"
				left="200px"
				display="flex"
				justifyContent="space-around"
				zIndex="5"
			>
				<HStack p={4} width="100%" justifyContent="space-between">
					<Button onClick={() => dispatch(login({ user: { id: 123, name: "aravind" } }))}>
						{user.isAuthenticated ? "Logout" : "Login"}
					</Button>
					<Heading size="md">
						<Link to="/home">Home</Link>
					</Heading>
					<IconButton
						icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
						isRound="true"
						onClick={toggleColorMode}
					/>
				</HStack>
				<Divider ml="75px" />
			</VStack>
		</>
	);
}

export default Navbar;
