import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Heading, HStack, VStack } from "@chakra-ui/layout";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import MobileMenu from "../Menu/Menu";

function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const bg = useColorModeValue("#fff", "#000");
	const borderColor = useColorModeValue(
		"1px solid rgb(235, 238, 240)",
		"1px solid rgb(47, 51, 54)"
	);

	return (
		<>
			<VStack
				position="fixed"
				top="0"
				right="0"
				height="70px"
				left={["0", "0", "199px"]}
				display="flex"
				justifyContent="space-around"
				zIndex="overlay"
				backgroundColor="rgba(0,0,0,1.00)"
				borderBottom={borderColor}
				borderLeft={["0", "0", `${borderColor}`]}
				bg={bg}
			>
				<HStack p={4} width="100%" justifyContent="space-between">
					<Flex alignItems="center">
						<Box display={["flex", "flex", "none"]}>
							<MobileMenu />
						</Box>
						<Heading size="md" ml={6}>
							<Link to="/home">Home</Link>
						</Heading>
					</Flex>
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
