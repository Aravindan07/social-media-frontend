import Icon from "@chakra-ui/icon";
import { Box, VStack } from "@chakra-ui/layout";
import { FaHashtag } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { RiHome7Fill } from "react-icons/ri";
import { useDisclosure } from "@chakra-ui/hooks";
import ModalComponent from "../Modal/Modal";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useColorModeValue } from "@chakra-ui/react";

function Sidebar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const state = useSelector((state) => state.auth);
	const iconColor = useColorModeValue("#000", "#fff");
	const borderColor = useColorModeValue(
		"1px solid rgb(235, 238, 240)",
		"1px solid rgb(47, 51, 54)"
	);

	const location = useLocation();

	return (
		<VStack
			position="fixed"
			left="0"
			top="0"
			w="200px"
			height="100%"
			p={4}
			marginTop="70px"
			overflow="auto"
			borderRight={borderColor}
		>
			<Box
				width="100%"
				height="90%"
				display="flex"
				flexDirection="column"
				alignItems="flex-end"
				cursor="pointer"
			>
				<NavLink to="/home">
					<Box
						borderRadius="50%"
						display="flex"
						alignItems="center"
						mt={3}
						mb={3}
						p={3}
						role="group"
						_hover={{
							backgroundColor: "rgba(23, 191, 99, 0.2)",
							transition: `backgroundColor 0.3s`,
						}}
					>
						<Icon
							aria-label="Home button"
							as={RiHome7Fill}
							w={6}
							h={6}
							fill={location.pathname === "/home" ? "#17bf63" : iconColor}
							stroke={location.pathname === "/home" ? "#17bf63" : iconColor}
							_groupHover={{
								fill: "#17bf63",
								transition: `fill 0.2s`,
							}}
						/>
					</Box>
				</NavLink>

				<NavLink to={`/explore`}>
					<Box
						borderRadius="50%"
						display="flex"
						alignItems="center"
						mt={3}
						mb={3}
						p={3}
						role="group"
						_hover={{ bgColor: "rgba(23,191,99,0.2)" }}
					>
						<Icon
							aria-label="Home button"
							as={FaHashtag}
							w={6}
							h={6}
							fill={location.pathname === "/explore" ? "#17bf63" : iconColor}
							_groupHover={{ fill: "#17bf63", transition: `fill 0.2s` }}
						/>
					</Box>
				</NavLink>

				<NavLink to="/notifications">
					<Box
						borderRadius="50%"
						display="flex"
						alignItems="center"
						mt={3}
						mb={3}
						p={3}
						role="group"
						_hover={{ bgColor: "rgba(23,191,99,0.2)" }}
					>
						<Icon
							aria-label="Home button"
							as={IoMdNotifications}
							w={6}
							h={6}
							fill={location.pathname === "/notifications" ? "#17bf63" : iconColor}
							_groupHover={{ fill: "#17bf63", transition: `fill 0.2s` }}
						/>
					</Box>
				</NavLink>

				<NavLink to={`/${state.user?.userName}`}>
					<Box
						borderRadius="50%"
						display="flex"
						alignItems="center"
						mt={3}
						mb={3}
						p={3}
						role="group"
						_hover={{ bgColor: "rgba(23,191,99,0.2)" }}
					>
						<Icon
							aria-label="Profile button"
							as={HiOutlineUser}
							w={6}
							h={6}
							fill={
								location.pathname === `/${state.user?.userName}`
									? "#17bf63"
									: iconColor
							}
							stroke={
								location.pathname === `/${state.user?.userName}`
									? "#17bf63"
									: iconColor
							}
							_groupHover={{
								fill: "#17bf63",
								stroke: "#17bf63",
								transition: `fill 0.2s, stroke 0.2s`,
							}}
						/>
					</Box>
				</NavLink>

				<Box
					borderRadius="50%"
					display="flex"
					alignItems="center"
					mt={3}
					mb={3}
					p={3}
					role="group"
					_hover={{ bgColor: "rgba(23,191,99,0.2)" }}
					onClick={onOpen}
				>
					<Icon
						aria-label="Logout button"
						as={BiLogOut}
						w={6}
						h={6}
						_groupHover={{ fill: "red.500", transition: `fill 0.2s` }}
					/>
					<ModalComponent isOpen={isOpen} onClose={onClose} />
				</Box>
			</Box>
		</VStack>
	);
}

export default Sidebar;
