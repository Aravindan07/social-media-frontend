import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Heading, HStack, VStack } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<VStack
				position="fixed"
				top="0"
				right="0"
				height="70px"
				left="199px"
				display="flex"
				justifyContent="space-around"
				zIndex="overlay"
				backgroundColor="rgba(0,0,0,1.00)"
				borderBottom="1px solid rgb(47, 51, 54)"
				borderLeft="1px solid rgb(47, 51, 54)"
			>
				<HStack p={4} width="100%" justifyContent="space-between">
					<Heading size="md">
						<Link to="/home">Home</Link>
					</Heading>
					<IconButton
						icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
						isRound="true"
						onClick={toggleColorMode}
					/>
				</HStack>
			</VStack>
		</>
	);
}

export default Navbar;
